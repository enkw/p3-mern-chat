import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true
      },
      // Look more into this, could be /api/*
      '/api/chat': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true
      },
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
