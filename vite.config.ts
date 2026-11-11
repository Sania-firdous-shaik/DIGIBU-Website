import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { apiApp } from './server/api';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'digibu-api-middleware',
      configureServer(server) {
        server.middlewares.use('/api', apiApp);
      },
    },
  ],
  server: {
    port: 5173,
  },
});
