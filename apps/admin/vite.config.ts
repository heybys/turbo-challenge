import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react(), EnvironmentPlugin('all')],
    // server: {
    //   proxy: {
    //     '/api': 'http://localhost:3000',
    //   },
    // },
    resolve: {
      alias: [
        { find: '@nm', replacement: '../../../node_modules' },
        { find: '@', replacement: '/src' },
        { find: '@apis', replacement: '/src/apis' },
        { find: '@assets', replacement: '/src/assets' },
        { find: '@components', replacement: '/src/components' },
        { find: '@hooks', replacement: '/src/hooks' },
        { find: '@layout', replacement: '/src/layout' },
        { find: '@pages', replacement: '/src/pages' },
        { find: '@router', replacement: '/src/router' },
        { find: '@stores', replacement: '/src/stores' },
        { find: '@styles', replacement: '/src/styles' },
      ],
    },
  };
});
