import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 👈 nombre exacto del repo
  server: {
    proxy: {
      // En desarrollo, /api se reenvía al backend (evita 404 cuando VITE_API_URL no está definido)
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    }
  }
})
