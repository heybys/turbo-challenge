/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/config/eslint/react.js'].map(require.resolve),
  parserOptions: {
    project: './tsconfig.lint.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    '.turbo/',
    'node_modules/',
    'dist/',
    '.eslintrc.cjs',
  ],
  rules: {
    'import/extensions': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
  },
};
