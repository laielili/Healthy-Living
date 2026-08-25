import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Healthy-Living/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  },
  build: {
    outDir: 'docs'
  }
})
