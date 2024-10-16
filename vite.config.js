import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: 'iife', // Self-contained Immediately Invoked Function Expression
        entryFileNames: 'index.js', // Ensure predictable filename
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    lib: {
      entry: './src/main.jsx', // Entry point for your app
      name: 'MyReactApp', // Global variable name
      fileName: 'my-react-app', // Output filename prefix
      formats: ['iife'], // Ensure the correct format
    },
  },
});
