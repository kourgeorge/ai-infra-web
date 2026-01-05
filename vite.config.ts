import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo-relative base so assets resolve correctly on GitHub Pages
  base: '/ai-infra-website/',
  build: {
    // Emit static site directly into /docs for GitHub Pages
    outDir: 'docs',
    assetsDir: 'assets',
  },
})
