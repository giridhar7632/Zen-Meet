const express = require('express')
const cookieParser = require('cookie-parser')
const { connect } = require('mongoose')

const { URI } = require('./utils/config')
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const logger = require('./utils/logger')
const { requestLogger } = require('./utils/middleware')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(requestLogger)

app.use('/', indexRouter)
app.use('/auth', authRouter)

connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => logger.info('MongoDB connection is established successfully! 🎉'))
  .catch((err) => logger.error('Something went wrong: ' + err?.message))

module.exports = app
