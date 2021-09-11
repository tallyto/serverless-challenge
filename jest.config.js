/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: { '.+\\.ts$': 'ts-jest' },
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@functions/(.*)$': '<rootDir>/src/functions/$1',
    '^@libs/(.*)$': '<rootDir>/src/libs/$1',
    '^@factory/(.*)$': '<rootDir>/src/factory/$1',
    '^@model/(.*)$': '<rootDir>/src/model/$1',
    '^@controller/(.*)$': '<rootDir>/src/controller/$1'
  },
  preset: '@shelf/jest-dynamodb',
  setupFiles: ['<rootDir>/src/config/setupTests.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts']

}
