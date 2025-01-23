// src/services/auth.js
import axios from 'axios';

const AUTH_CONFIG = {
    clientId: import.meta.env.VITE_CLIENT_ID,
    clientSecret: import.meta.env.VITE_CLIENT_SECRET,
    redirectUri: import.meta.env.VITE_REDIRECT_URI,
    authUrl: import.meta.env.VITE_AUTH_URL,
    tokenUrl: import.meta.env.VITE_TOKEN_URL,
    userInfoUrl: import.meta.env.VITE_USER_INFO_URL
};


export const initiateOAuthFlow = () => {
    const state = Math.random().toString(36).substring(2);
    localStorage.setItem('oauth_state', state);
    
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: AUTH_CONFIG.clientId,
        redirect_uri: AUTH_CONFIG.redirectUri,
        scope: 'openid',
        state: state
    });

    window.location.href = `${AUTH_CONFIG.authUrl}?${params.toString()}`;
};

// src/services/auth.js
export async function handleOAuthCallback(code) {
    try {
        const formData = new URLSearchParams();
        formData.append('client_id', AUTH_CONFIG.clientId);
        formData.append('client_secret', AUTH_CONFIG.clientSecret);
        formData.append('grant_type', 'authorization_code');
        formData.append('code', code);
        formData.append('redirect_uri', AUTH_CONFIG.redirectUri);

        // Use proxy URL instead of direct token URL
        const response = await axios({
            method: 'POST',
            url: '/proxy/oauth/token', // Proxy endpoint
            data: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            validateStatus: function (status) {
                return status < 500;
            }
        });

        console.log('Token response:', response.data);

        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (response.data.access_token) {
            localStorage.setItem('access_token', response.data.access_token);
        }

        return response.data;
    } catch (error) {
        console.error('OAuth Error Details:', {
            message: error.message,
            status: error.response?.status,
            data: error.response?.data,
            requestInfo: {
                url: '/proxy/oauth/token',
                method: 'POST'
            }
        });
        throw error;
    } 
}

export const fetchUserInfo = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) throw new Error('No access token found');

    try {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:8080/proxy/user-info',  // Change to your proxy server's URL
            params: {
                access_token: token
            }
        });
        console.log('User info response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch user info:', error);
        throw error;
    }
};
