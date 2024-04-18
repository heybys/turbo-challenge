const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

/** @type {import('jest').Config} */
const config = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    'jest-styled-components'
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
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' } )
  },
};

module.exports = config;