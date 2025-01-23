<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { 
  handleOAuthCallback, 
  fetchUserInfo 
} from '../services/auth';

const router = useRouter();

onMounted(async () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const savedState = localStorage.getItem('oauth_state');

    // Validate state to prevent CSRF
    if (!state || state !== savedState) {
      throw new Error('Invalid OAuth state');
    }

    if (!code) {
      throw new Error('No authorization code received');
    }

    // Exchange code for token
    await handleOAuthCallback(code);
    
    // Fetch user information
    const userInfo = await fetchUserInfo();
    
    // Store user info (optional)
    localStorage.setItem('user_info', JSON.stringify(userInfo));

    // Redirect to dashboard
    router.push('/dashboard');
  } catch (error) {
    console.error('Authentication failed:', error);
    router.push('/');
  } finally {
    // Clean up state
    localStorage.removeItem('oauth_state');
  }
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-center">
      <p class="text-lg">Authenticating...</p>
      <div class="spinner mt-4"></div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>