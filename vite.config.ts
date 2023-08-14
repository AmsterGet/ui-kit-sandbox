import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';

export default defineConfig(() => ({
  plugins: [react(), svgr(), tsConfigPaths(), dts()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@constants': resolve(__dirname, './src/constants'),
    },
  },
  build: {
    lib: {
      // TODO: generate it automatically
      entry: {
        themeProvider: resolve('src', 'components', 'themeProvider'),
        index: resolve('src', 'components'),
        button: resolve('src', 'components', 'button'),
        checkbox: resolve('src', 'components', 'checkbox'),
        systemMessage: resolve('src', 'components', 'systemMessage'),
      },
      name: 'ui-kit',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies), 'react/jsx-runtime'],
    },
  },
}));
