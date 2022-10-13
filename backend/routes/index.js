const express = require('express')
const router = express.Router()
const { verify } = require('jsonwebtoken')

const User = require('../models/user')

const { createPasswordResetToken } = require('../utils/tokens')
const {
  transporter,
  createPasswordResetUrl,
  passwordResetTemplate,
  passwordResetConfirmationTemplate,
  emailVerifyConfirmationTemplate,
} = require('../utils/email')
const { protected } = require('../utils/protected')

router.get('/', function (_req, res) {
  res.send('Hello Express!! 👋')
})

router.get('/protected', protected, async (req, res) => {
  try {
    if (req.user)
      return res.json({
        message: 'You are logged in! 🤗',
        type: 'success',
        user: req.user,
      })

    return res.status(500).json({
      message: 'You are not logged in! 😢',
      type: 'error',
    })
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'Error getting protected route!',
      error,
    })
  }
})

router.post('/verify-email/:id/:token', async (req, res) => {
  try {
    const { id, token } = req.params

    const user = await User.findById(id)

    if (!user)
      return res.status(500).json({
        message: "User doesn't exist! 😢",
        type: 'error',
      })

    const isValid = verify(token, user.email)

    if (!isValid)
      return res.status(500).json({
        message: 'Invalid token! 😢',
        type: 'error',
      })

    user.verified = true

    await user.save()

    const mailOptions = emailVerifyConfirmationTemplate(user)
    transporter.sendMail(mailOptions, (err, info) => {
      if (err)
        return res.status(500).json({
          message: 'Error sending email! 😢',
          type: 'error',
        })

      return res.json({
        message: 'Email verification success! 📧',
        type: 'success',
      })
    })
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'Error sending email!',
      error,
    })
  }
})

router.post('/send-password-reset-email', async (req, res) => {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })
    if (!user)
      return res.status(500).json({
        message: "User doesn't exist! 😢",
        type: 'error',
      })

    const token = createPasswordResetToken(user)

    const url = createPasswordResetUrl(user._id, token)

    const mailOptions = passwordResetTemplate(user, url)
    transporter.sendMail(mailOptions, (err, info) => {
      console.log(err, info)
      if (err)
        return res.status(500).json({
          message: 'Error sending email! 😢',
          type: 'error',
        })

      return res.json({
        message: 'Password reset link has been sent to your email! 📧',
        type: 'success',
      })
    })
  } catch (error) {
    console.log('Error: ', error)
    res.status(500).json({
      type: 'error',
      message: 'Error sending email!',
      error,
    })
  }
})

router.post('/reset-password/:id/:token', async (req, res) => {
  try {
    const { id, token } = req.params
    const { newPassword } = req.body

    const user = await User.findById(id)

    if (!user)
      return res.status(500).json({
        message: "User doesn't exist! 😢",
        type: 'error',
      })

    const isValid = verify(token, user.password)

    if (!isValid)
      return res.status(500).json({
        message: 'Invalid token! 😢',
        type: 'error',
      })

    user.password = newPassword

    await user.save()

    const mailOptions = passwordResetConfirmationTemplate(user)
    transporter.sendMail(mailOptions, (err, info) => {
      if (err)
        return res.status(500).json({
          message: 'Error sending email! 😢',
          type: 'error',
        })

      return res.json({
        message: 'Email sent! 📧',
        type: 'success',
      })
    })
  } catch (error) {
    res.status(500).json({
      type: 'error',
      message: 'Error sending email!',
      error,
    })
  }
})

module.exports = router
