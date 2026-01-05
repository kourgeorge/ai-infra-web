import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo-relative base so assets resolve correctly on GitHub Pages
  base: '/ai-infra-web/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
