const { ENV } = require('./config')

const info = (...params) => {
  if (ENV !== 'test') {
    console.log(...params)
  }
}

const error = (...params) => {
  if (ENV !== 'test') {
    console.error(...params)
  }
}

module.exports = {
  info,
  error,
}
