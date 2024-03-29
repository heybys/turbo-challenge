/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react.js"],
  parserOptions: {
    project: true,
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
