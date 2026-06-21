import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  site: 'https://lapostacatering.com.ar',
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
