import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

function rootRewriteIntegration() {
  return {
    name: 'root-rewrite-integration',
    hooks: {
      'astro:server:setup': ({ server }) => {
        if (server.httpServer) {
          server.httpServer.prependListener('request', (req) => {
            const rawUrl = req.url || '';
            const pathName = rawUrl.split('?')[0];
            if (pathName === '/' || pathName === '' || pathName === '/index.html') {
              const query = rawUrl.includes('?') ? rawUrl.slice(rawUrl.indexOf('?')) : '';
              req.url = `/chapter21/${query}`;
            }
          });
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://amazon-hike.com',
  base: '/chapter21',
  trailingSlash: 'always',
  outDir: './dist/chapter21',
  integrations: [rootRewriteIntegration()],
  vite: {
    plugins: [tailwindcss()],
  },
});
