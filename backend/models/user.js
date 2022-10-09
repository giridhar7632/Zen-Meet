const { Schema, model } = require('mongoose')

const userSchema = new Schema({
	name: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	verified: {
		type: Boolean,
		default: false,
	},
	refreshtoken: {
		type: String,
	},
	rooms: [
		{
			type: String,
		},
	],
	socket: {
		type: Object,
	},
})

module.exports = model('User', userSchema)
