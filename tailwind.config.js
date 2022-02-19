const path = require('path')

module.exports = {
  content: [path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)')],
  important: '#__next',
  theme: {
    extend: {},
  },
  plugins: [],
}
