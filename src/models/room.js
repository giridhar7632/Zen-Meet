const { Schema, model } = require('mongoose')
const { info } = require('../utils/logger')

const roomSchema = new Schema({
  roomId: { type: String, unique: true },
  roomName: { type: String, default: 'Untitled' },
  meetingUsers: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      options: { video: Boolean, audio: Boolean },
      userId: { type: String, required: true },
    },
  ],
  presentUsers: [
    {
      userId: { type: String, required: true },
      name: { type: String, required: true },
      socketId: { type: String },
    },
  ],
  screenShareInRoom: { id: { type: String }, name: { type: String } },
  transcriptEnabled: { userId: String, name: String },
  chats: [
    {
      userId: { type: ObjectId, ref: 'User' },
      message: String,
      name: String,
    },
  ],
})

roomSchema.path('meetingUsers').validate(function (value) {
  info(value.length)
  if (value.length > 10) {
    throw new Error('Atmost 10 people allowed!')
  }
})

module.exports = model('Room', roomSchema)
