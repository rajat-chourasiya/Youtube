// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows access from network IPs
    port: 5173, // You can set any port, default is 5173
  },
})
