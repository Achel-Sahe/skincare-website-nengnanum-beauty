import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/skincare-website-nengnanum-beauty/",
  plugins: [react()]
})
