import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If you deploy to GitHub Pages for repo "bitzli", keep base as "/bitzli/".
// If your repo is different, adjust the base path accordingly.
export default defineConfig({
  base: '/bitzli/',
  plugins: [react()]
});
