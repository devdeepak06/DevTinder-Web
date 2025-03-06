import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["c500-2409-40d0-201b-9ad9-7930-ff46-36e6-1c7f.ngrok-free.app"]
  }
})
