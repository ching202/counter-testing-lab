module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/*.test.tsx'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  collectCoverageFrom: ['src/App.tsx'],
  coverageReporters: ['text', 'html', 'lcov', 'json-summary'],
  coverageThreshold: {
    global: { statements: 100, branches: 100, functions: 100, lines: 100 },
  },
  clearMocks: true,
  verbose: true,
};
