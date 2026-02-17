import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    allowedHosts: [
      'unleached-thunderstruck-coralie.ngrok-free.dev',
      '.ngrok-free.dev' // Allow any ngrok-free.dev subdomain
    ]
  }
})
