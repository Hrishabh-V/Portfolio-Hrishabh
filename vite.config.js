import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-Hrishabh/',
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws', // ensure WebSocket connection for HMR
      host: 'localhost', // adjust if needed
    },
  },
})


