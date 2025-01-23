// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/proxy/oauth/token': {
        target: 'http://localhost:8080', // Your Golang backend URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy\/oauth\/token/, '/proxy/oauth/token')
      }
    }
  }
})