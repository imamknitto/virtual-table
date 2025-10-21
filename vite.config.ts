import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/virtual-table/',
  server: { port: 3002 },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor';
          }

          // Router
          if (id.includes('react-router')) {
            return 'router';
          }

          // Virtualization libraries
          if (id.includes('@tanstack/react-virtual') || id.includes('react-virtualized-auto-sizer')) {
            return 'virtualization';
          }

          // Utility libraries
          if (id.includes('clsx') || id.includes('use-context-selector')) {
            return 'utils';
          }

          // Faker for development/demo
          if (id.includes('@faker-js/faker')) {
            return 'faker';
          }

          // Knitto table components - less aggressive splitting to avoid circular dependencies
          if (id.includes('src/components/knitto-table')) {
            // Icons as separate chunk (safe to separate)
            if (id.includes('/icons/')) {
              return 'knitto-icons';
            }

            // Context providers (safe to separate)
            if (id.includes('/context/')) {
              return 'knitto-context';
            }

            // Hooks (safe to separate)
            if (id.includes('/hooks/')) {
              return 'knitto-hooks';
            }

            // Keep table components together to avoid circular dependencies
            if (id.includes('regular-table') || id.includes('virtual-table') || id.includes('knitto-table.tsx')) {
              return 'knitto-table';
            }

            // Keep all other components together
            return 'knitto-components';
          }

          // Node modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize chunk file names
        chunkFileNames: () => `assets/[name]-[hash].js`,
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Enable source maps for debugging
    sourcemap: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Enable experimental features for better performance
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-virtual',
      'react-virtualized-auto-sizer',
      'clsx',
      'use-context-selector',
    ],
    exclude: ['@faker-js/faker'], // Exclude faker from optimization
  },
});
