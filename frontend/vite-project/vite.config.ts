import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', // Использование современных ES модуля
    outDir: 'frontend/vite-project/dist', // Папка для вывода файлов, соответствующая Vercel
    assetsDir: 'assets', // Статические файлы (если есть)
    rollupOptions: {
      input: 'frontend/vite-project/index.html', // Указание на главный файл для сборки
    },
  },
  plugins: [react()],
})