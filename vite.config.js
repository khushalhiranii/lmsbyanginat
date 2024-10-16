// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: 'iife', // Self-contained script
        entryFileNames: 'index.js', // Rename to avoid hashed filenames
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    lib: {
      entry: './src/main.jsx', // Adjust this to your entry point
      name: 'MyReactApp',
    },
  },
});
