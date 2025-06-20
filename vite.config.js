import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // This line is new

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // This is the crucial line for GitHub Pages deployment on main branch
  plugins: [react( )],
  resolve: { // This entire block is new
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
