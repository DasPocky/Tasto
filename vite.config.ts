import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Die App läuft unter tasto.endlab.de an der Wurzel
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(import.meta.dirname, './src') },
  },
  build: {
    // dist/client/… → vom Worker eingebettet ausgeliefert (scripts/embed-assets.mjs)
    outDir: 'dist/client',
    emptyOutDir: true,
  },
  server: {
    // API im Dev-Modus an `wrangler dev` weiterreichen
    proxy: { '/api': 'http://localhost:8787' },
  },
})
