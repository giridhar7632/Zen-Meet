const express = require('express')
const cookieParser = require('cookie-parser')
const { connect } = require('mongoose')

const { URI } = require('./utils/config')
const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
const chatsRouter = require('./routes/chats')
const logger = require('./utils/logger')
const { requestLogger } = require('./utils/middleware')

const app = express()

app.use((req, res, next) => {
  const allowedOrigins = [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://localhost:5000',
    'http://127.0.0.1:5000',
    'http://localhost:8080',
    'https://zen-meet.vercel.app',
  ]
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(requestLogger)

app.use('/api', indexRouter)
app.use('/api/auth', authRouter)
app.use('/api/chats', chatsRouter)

connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => logger.info('MongoDB connection is established successfully! 🎉'))
  .catch((err) => logger.error('Something went wrong: ' + err?.message))

module.exports = app
