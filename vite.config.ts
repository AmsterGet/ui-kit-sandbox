import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json';

// TODO: build styles for components individually
export default defineConfig(() => ({
  plugins: [react(), svgr(), tsConfigPaths(), dts()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@common': resolve(__dirname, './src/common'),
    },
  },
  build: {
    lib: {
      // TODO: generate it automatically
      entry: {
        index: resolve('src', 'components'),
        themeProvider: resolve('src', 'components', 'themeProvider'),
        button: resolve('src', 'components', 'button'),
        checkbox: resolve('src', 'components', 'checkbox'),
        systemMessage: resolve('src', 'components', 'systemMessage'),
        fieldText: resolve('src', 'components', 'fieldText'),
        modal: resolve('src', 'components', 'modal'),
        dropdown: resolve('src', 'components', 'dropdown'),
        toggle: resolve('src', 'components', 'toggle'),
        icon: resolve('src', 'components', 'icon'),
        fieldNumber: resolve('src', 'components', 'fieldNumber'),
      },
      name: 'ui-kit',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.dependencies),
        ...Object.keys(packageJson.peerDependencies),
        'react/jsx-runtime',
      ],
    },
  },
}));
