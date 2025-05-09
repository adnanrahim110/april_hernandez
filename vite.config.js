import inject from '@rollup/plugin-inject'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      plugins: [
        inject({
          $: 'jquery',
          jQuery: 'jquery'
        })
      ]
    }
  },
  server: {
    port: 5173,
    proxy: {
      "/orders": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/paypal": {
        target: "http://127.0.0.1:3000/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
