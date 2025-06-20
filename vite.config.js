import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This line tells your project to work correctly on GitHub Pages
  base: '/PortFolio/',
  
  // This line ensures the build process can find your components
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})