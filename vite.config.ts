import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        privacy: resolve(__dirname, 'privacy-policy/index.html'),
        terms: resolve(__dirname, 'terms-of-service/index.html'),
        'services/web-development': resolve(__dirname, 'services/web-development/index.html'),
        'services/software-development': resolve(__dirname, 'services/software-development/index.html'),
        'services/devops-cloud': resolve(__dirname, 'services/devops-cloud/index.html'),
        'services/system-integration': resolve(__dirname, 'services/system-integration/index.html'),
        'website-offer': resolve(__dirname, 'website-offer/index.html'),
        404: resolve(__dirname, '404.html'),
        500: resolve(__dirname, '500.html'),
      },
    },
  },
  server: {
    allowedHosts: [
      'programmingprophet.com',
      'server.programmingprophet.site',
    ],
    proxy: {
      '/api': {
        target: 'https://server.programmingprophet.site/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
