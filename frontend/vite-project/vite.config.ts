import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Относительные пути для статических файлов
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
