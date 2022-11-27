require('dotenv').config()

const PORT = process.env.PORT || 5000

const URI = process.env.NODE_ENV === 'test' ? process.env.TEST_MONGO_URI : process.env.MONGO_URI
const CLIENT_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : process.env.NEXT_PUBLIC_URL
module.exports = {
  URI,
  PORT,
  CLIENT_URL,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  VERIFY_EMAIL_TOKEN_SECRET: process.env.VERIFY_EMAIL_TOKEN_SECRET,
  PASSWORD_RESET_TOKEN_LIFE: process.env.PASSWORD_RESET_TOKEN_LIFE,
  VERIFY_EMAIL_TOKEN_LIFE: process.env.VERIFY_EMAIL_TOKEN_LIFE,
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  SALT_WORK_FACTOR: process.env.SALT_WORK_FACTOR,
  ACCESS_TOKEN_LIFE: process.env.ACCESS_TOKEN_LIFE,
  REFRESH_TOKEN_LIFE: process.env.REFRESH_TOKEN_LIFE,
  ENV: process.env.NODE_ENV,
  TRANSCRIPT_APP_ID: process.env.TRANSCRIPT_APP_ID,
  TRANSCRIPT_APP_SCERET: process.env.TRANSCRIPT_APP_SCERET,
}
