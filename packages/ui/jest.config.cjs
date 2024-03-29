/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: [
    "@testing-library/jest-dom"
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      babel: true,
      tsconfig: 'tsconfig.json',
    }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: [
    '**/?(*.)+(spec|test).(ts|tsx|js)',
  ],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = config;