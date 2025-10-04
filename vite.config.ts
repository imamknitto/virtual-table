import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 3002 },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          virtual: ['@tanstack/react-virtual', 'react-virtualized-auto-sizer'],
          utils: ['clsx', 'use-context-selector'],
        },
      },
    },
    // Enable source maps for debugging
    sourcemap: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Enable experimental features for better performance
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
