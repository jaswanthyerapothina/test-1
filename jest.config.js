module.exports = {
  moduleNameMapper: {
    '^.+\\.(scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: [
    '<rootDir>/config/setup.js'
  ]
}
