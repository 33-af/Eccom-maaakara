import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', // Использование современных ES модуля
    outDir: 'dist', // Папка для вывода файлов
    assetsDir: 'assets',
  },
  plugins: [react()],
})
