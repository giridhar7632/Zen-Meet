const { createTransport } = require('nodemailer')
const { emailTemplate } = require('./templates')

const createPasswordResetUrl = (id, token) =>
  `${process.env.CLIENT_URL}/reset-password/${id}/${token}`

const createEmailVerificationUrl = (id, token) =>
  `${process.env.CLIENT_URL}/verify-email/${id}/${token}`

const transporter = createTransport({
  service: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const passwordResetTemplate = (user, url) => {
  const { name, email } = user
  return {
    from: `Mail - Zen Meet`,
    to: email,
    subject: `Reset Password`,
    html: emailTemplate({
      title: 'Password Reset Link',
      subject: 'Reset Password',
      body: `Hey ${name}!
			Reset your password by clicking on the button below.`,
      link: url,
      btn: 'Reset Password',
      footer: `The link will expire in 15 mins!
		If you haven't requested password reset, please ignore!
		`,
    }),
  }
}

const emailVerificationTemplate = (user, url) => {
  const { name, email } = user
  return {
    from: `Mail - Zen Meet`,
    to: email,
    subject: `Verify your email! ${name}`,
    html: emailTemplate({
      title: 'Email Verification Link',
      subject: 'Email Verification',
      body: `Hey ${name}!
			Verify your email by clicking the button below.`,
      link: url,
      btn: 'Verify',
      footer: `If you haven't created an account, please ignore!
		`,
    }),
  }
}

const passwordResetConfirmationTemplate = (user) => {
  const { name, email } = user

  return {
    from: `Mail - Zen Meet`,
    to: email,
    subject: `Password Reset Successful`,
    html: emailTemplate({
      title: 'Password Reset Successful',
      subject: 'Password Reset Successful',
      body: `Hey ${name}!
			You have successfully completed resetting your password.`,
      footer: `If you haven't changed your password, please reset it by clicking forgot password!
		`,
    }),
  }
}

const emailVerifyConfirmationTemplate = (user) => {
  const { name, email } = user

  return {
    from: `Mail - Zen Meet`,
    to: email,
    subject: `Email Verification Successful`,
    html: emailTemplate({
      title: 'Email Verification Successful',
      subject: 'Email Verification Successful',
      body: `Hey ${name}!
			Thank you for verifying your email. You can now enjoy the zen meet of it's fill potential.`,
      footer: `If you are not expecting this email, please ignore!
		`,
    }),
  }
}

module.exports = {
  transporter,
  createPasswordResetUrl,
  createEmailVerificationUrl,
  passwordResetTemplate,
  emailVerificationTemplate,
  passwordResetConfirmationTemplate,
  emailVerifyConfirmationTemplate,
}
