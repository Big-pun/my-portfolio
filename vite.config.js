import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',
  build: {
    rollupOptions: {
        main: resolve(dirname(fileURLToPath(import.meta.url)), "index.html"),
        404: resolve(dirname(fileURLToPath(import.meta.url)), "public/404.html"),
    }
  }
})


