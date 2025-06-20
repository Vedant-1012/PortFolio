import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This line is for GitHub Pages deployment
  base: '/PortFolio/', 
  // This line is for the build process
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})