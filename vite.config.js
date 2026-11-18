import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Netlify serves the site from the domain root; GitHub Pages serves it from /bharat-sharma-portfolio/
  base: process.env.NETLIFY ? '/' : '/bharat-sharma-portfolio/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
