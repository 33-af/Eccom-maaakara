import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Указывает использовать относительные пути
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
