// vite.config.ts
import * as path from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true }), tsconfigPaths()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@repo/ui',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      onwarn: (warning, defaultHandler) => {
        if (
          ['MODULE_LEVEL_DIRECTIVE', 'SOURCEMAP_ERROR'].includes(warning.code)
        ) {
          return;
        }
        defaultHandler(warning);
      },
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
  },
});
