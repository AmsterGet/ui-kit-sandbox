import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import EsLint from 'vite-plugin-linter';
import tsConfigPaths from 'vite-tsconfig-paths';
import * as packageJson from './package.json'

const { EsLinter, linterPlugin } = EsLint;

export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
    dts(),
  ],
  build: {
    lib: {
      entry: {
        button: resolve('src', 'components', 'button'),
        themeProvider: resolve('src', 'components', 'themeProvider'),
        index: resolve('src', 'components'),
      },
      name: 'ui-kit',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
