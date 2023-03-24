const express = require('express')
const router = express.Router()
const { hash, compare } = require('bcryptjs')
const { verify } = require('jsonwebtoken')

const User = require('../models/user')
const logger = require('../utils/logger')
const { REFRESH_TOKEN_SECRET } = require('../utils/config')
const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
  createEmailVerificationToken,
} = require('../utils/tokens')
const {
  transporter,
  emailVerificationTemplate,
  createEmailVerificationUrl,
} = require('../utils/email')

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    const user = await User.findOne({ email: email })
    if (user)
      return res.status(500).json({
        message: 'User already exists! Try logging in. 😄',
        type: 'warning',
      })

    const passwordHash = await hash(password, 10)
    const newUser = new User({
      name,
      email,
      password: passwordHash,
    })

    const saved = await newUser.save()
    const token = createEmailVerificationToken(saved)

    const url = createEmailVerificationUrl(saved._id, token)

    const mailOptions = emailVerificationTemplate(saved, url)
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        logger.error(err, info)
        return res.status(500).json({
          message: 'Error sending email! 😢',
          type: 'error',
        })
      }

      return res.json({
        message: 'Verify your email by clicking the link sent to your email! 📧',
        type: 'success',
      })
    })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      type: 'error',
      message: 'Error creating user!',
      error,
    })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email: email }).select('+refreshtoken')
    if (!user)
      return res.status(500).json({
        message: "User doesn't exist! 😢",
        type: 'error',
      })

    const isMatch = await compare(password, user.password)
    if (!isMatch)
      return res.status(500).json({
        message: 'Password is incorrect! ⚠️',
        type: 'error',
      })

    const accessToken = createAccessToken(user._id)
    const refreshToken = createRefreshToken(user._id)

    user.refreshtoken = refreshToken
    await user.save()

    sendRefreshToken(res, refreshToken)
    sendAccessToken(req, res, accessToken)
  } catch (error) {
    logger.error(error)

    return res.status(500).json({
      type: 'error',
      message: 'Error signing in!',
      error,
    })
  }
})

router.post('/logout', (_req, res) => {
  res.clearCookie('refreshtoken')
  return res.json({
    message: 'Logged out successfully! 🤗',
    type: 'success',
  })
})

router.post('/refresh_token', async (req, res) => {
  try {
    const { refreshtoken } = req.cookies
    if (!refreshtoken)
      return res.status(500).json({
        message: 'No refresh token! 🤔',
        type: 'error',
      })

    let id
    try {
      id = await verify(refreshtoken, REFRESH_TOKEN_SECRET).id
    } catch (error) {
      return res.status(500).json({
        message: 'Incorrect token! 🤔',
        type: 'error',
      })
    }

    if (!id)
      return res.status(500).json({
        message: 'False token! 🤔',
        type: 'error',
      })

    const user = await User.findById(id)

    if (!user)
      return res.status(500).json({
        message: "User doesn't exist! 😢",
        type: 'error',
      })

    if (user.refreshtoken !== refreshtoken)
      return res.status(500).json({
        message: 'Invalid refresh token! 🤔',
        type: 'error',
      })

    const accessToken = createAccessToken(user._id)
    const refreshToken = createRefreshToken(user._id)

    user.refreshtoken = refreshToken

    await user.save()

    sendRefreshToken(res, refreshToken)
    return res.json({
      message: 'Refreshed successfully! 🤗',
      type: 'success',
      accesstoken: accessToken,
    })
  } catch (error) {
    logger.error(error)

    return res.status(500).json({
      type: 'error',
      message: 'Error refreshing token!',
      error,
    })
  }
})

module.exports = router
