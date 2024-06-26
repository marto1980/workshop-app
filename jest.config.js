/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
  setupFiles: ["./jest.polyfills.js"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
}
