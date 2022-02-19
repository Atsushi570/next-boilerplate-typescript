const colors = require('./src/styles/themes/colors')
const path = require('path')
console.log(colors)
module.exports = {
  content: [path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)')],
  important: '#__next',
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
