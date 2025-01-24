import { defineStore } from 'pinia'
import { fetchUserInfo, handleOAuthCallback } from '../services/auth'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null, // Check if user details are stored in localStorage
    accessToken: localStorage.getItem('access_token') || null, // Fetch token from localStorage
    isAuthenticated: !!localStorage.getItem('access_token'), // Check if token exists
    error: null
  }),
  actions: {
    async login(code) {
      try {
        const tokenResponse = await handleOAuthCallback(code)
        this.accessToken = tokenResponse.access_token
        localStorage.setItem('access_token', this.accessToken)
        
        const userInfo = await fetchUserInfo()
        this.user = userInfo
        localStorage.setItem('user', JSON.stringify(userInfo)) // Store user info in localStorage
        this.isAuthenticated = true
        this.error = null
      } catch (error) {
        this.logout()
        this.error = error.message
        throw error
      }
    },
    logout() {
      this.user = null
      this.accessToken = null
      this.isAuthenticated = false
      localStorage.removeItem('access_token')
      localStorage.removeItem('user') // Remove user data on logout
    },
    async fetchUser() {
      if (this.accessToken) {
        try {
          const userInfo = await fetchUserInfo()
          this.user = userInfo
          localStorage.setItem('user', JSON.stringify(userInfo)) // Store updated user info
        } catch (error) {
          this.logout() // If user info cannot be fetched, log out
        }
      }
    }
  },
  getters: {
    currentUser: (state) => state.user,
    token: (state) => state.accessToken
  }
})
