import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root base so assets load correctly on the custom domain (GitHub Pages CNAME)
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
