/** @type {import('jest').Config} */
const config = {
  setupFiles: ['<rootDir>/jest.setup.js'],
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
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@nm/(.*)$': '<rootDir>/../../../node_modules/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@routers/(.*)$': '<rootDir>/src/routers/$1',
    '^@stores/(.*)$': '<rootDir>/src/stores/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
  },
};

module.exports = config;