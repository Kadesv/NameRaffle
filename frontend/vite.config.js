import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './frontend', // Ensure this points to your frontend directory
  build: {
    outDir: '../dist', // Output directory for build
    emptyOutDir: true,
  },
  plugins: [react()],
});
