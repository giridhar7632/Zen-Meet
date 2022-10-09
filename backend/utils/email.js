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
	const { username, email } = user
	return {
		from: `Mail - <${process.env.EMAIL_USER}>`,
		to: email,
		subject: `Reset Password`,
		html: emailTemplate({
			title: 'Password Reset Link',
			subject: 'Reset Password',
			body: `Hey ${username}!
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
		from: `Mail - <${process.env.EMAIL_USER}>`,
		to: email,
		subject: `Verify your email! ${name}`,
		html: `
    <h2>Email verification</h2>
    <p>You can verify your email by clicking on the link below:</p>
    <a href=${url}><button>Verify email</button></a>
    <br />
    <br />
		<small><a style="color: #38A169" href=${url}>${url}</a></small>
    <br />
		<small>If you haven't signed up to our account, please ignore!</small>
    <br /><br />
    <p>Thanks,</p>
    <p>Zen Meet</p>`,
	}
}

const passwordResetConfirmationTemplate = (user) => {
	const { email } = user

	return {
		from: `Mail - <${process.env.EMAIL_USER}>`,
		to: email,
		subject: `Password Reset Successful`,
		html: `
    <h2>Password Reset Successful</h2>
    <p>You've successfully updated your password for your account <${email}>. </p>
		<small>If you did not change your password, reset it from your account.</small>
    <br /><br />
    <p>Thanks,</p>
    <p>Zen Meet</p>`,
	}
}

module.exports = {
	transporter,
	createPasswordResetUrl,
	createEmailVerificationUrl,
	passwordResetTemplate,
	emailVerificationTemplate,
	passwordResetConfirmationTemplate,
}
