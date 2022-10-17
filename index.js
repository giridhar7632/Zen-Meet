require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const { connect } = require('mongoose')

const indexRouter = require('./src/routes/index')
const authRouter = require('./src/routes/auth')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/auth', authRouter)

connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connection is established successfully! 🎉'))
  .catch((err) => console.log('Something went wrong: ' + err?.message))

app.listen(PORT, function () {
  console.log(`🚀 Listening on port ${PORT}`)
})
