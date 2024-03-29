const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    'coverage',
    '.*.js',
    '.turbo/',
    'node_modules/',
    'dist/',
  ],
  overrides: [
    // Force ESLint to detect .tsx files
    { files: ['*.js?(x)', '*.ts?(x)'] },
  ],
  rules: {
    'import/extensions': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
  },
};
