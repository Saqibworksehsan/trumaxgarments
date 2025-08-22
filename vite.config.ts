// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/trumaxgarments/', // ⬅️ must match repo name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});