module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.eslint.json', './tsconfig.node.json'],
  },
  plugins: ['react-refresh', 'prettier', 'react'],
  rules: {
    'react-refresh/only-export-components': ['warn', {
      allowConstantExport: true
    }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
};
