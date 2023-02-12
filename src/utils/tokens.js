const { sign } = require('jsonwebtoken')
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = require('./config')

// signing the access token
const createAccessToken = (id) => {
  return sign({ id }, ACCESS_TOKEN_SECRET, {
    expiresIn: 15 * 60,
  })
}

// signing the refresh token
const createRefreshToken = (id) => {
  return sign({ id }, REFRESH_TOKEN_SECRET, {
    expiresIn: '30d',
  })
}

// sending the access token to the client
const sendAccessToken = (_req, res, accesstoken) => {
  res.json({
    accesstoken,
    message: 'Sign in Successful 🥳',
    type: 'success',
  })
}

// sending the refresh token to the client as a cookie
const sendRefreshToken = (res, refreshtoken) => {
  res.cookie('refreshtoken', refreshtoken, {
    httpOnly: true,
  })
}

// for verifying the email
const createEmailVerificationToken = ({ _id, email }) => {
  const secret = email
  return sign({ id: _id }, secret, {
    expiresIn: '90d',
  })
}

const createPasswordResetToken = ({ _id, email, password }) => {
  const secret = password
  return sign({ id: _id, email }, secret, {
    expiresIn: 15 * 60, // 15 minutes
  })
}

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
  createEmailVerificationToken,
  createPasswordResetToken,
}
