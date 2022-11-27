const express = require('express')
const router = express.Router()

const Room = require('../models/room')
const User = require('../models/user')
const logger = require('../utils/logger')
const { TRANSCRIPT_APP_ID, TRANSCRIPT_APP_SCERET } = require('../utils/config')
const { isAuth } = require('../utils/isAuth')
const { default: fetch } = require('node-fetch')

router.get('/transcriptToken', async (_req, res) => {
  const authOptions = {
    method: 'post',
    url: 'https://api.symbl.ai/oauth2/token:generate',
    body: {
      type: 'application',
      appId: TRANSCRIPT_APP_ID,
      appSecret: TRANSCRIPT_APP_SCERET,
    },
    json: true,
  }
  try {
    const r = await fetch(authOptions)
    const data = await r.json()
    res.send(data)
  } catch (error) {
    logger.error(error.message)
  }
})

router.get('/get-chats', isAuth, async (req, res) => {
  const roomsId = req.user.rooms.filter((room) => room)
  try {
    const rooms = await Room.find({ roomId: { $in: roomsId } })
    req.user.password = null
    res.json({
      message: 'Rooms of a user!',
      type: 'success',
      data: { rooms, user: req.user },
    })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      type: 'error',
      message: 'Error fetching the chats!',
      error,
    })
  }
})

router.post('/create-room', isAuth, async (req, res) => {
  const { roomId, roomName } = req.body
  try {
    const room = await Room.findOneAndUpdate(
      { roomId },
      {
        $set: {
          roomName: roomName || '',
          meetingUsers: [],
          screenShareInRoom: {
            id: null,
            name: null,
          },
          chats: [],
        },
        $push: {
          presentUsers: { userId: req.user._id, name: req.user.name, socketId: req.body.socketId },
        },
      },
      { upsert: true, new: true }
    )
    await User.findByIdAndUpdate(req.user._id, { $push: { rooms: roomId } })
    return res.json({ type: 'success', message: 'Room created! 🎊', data: room })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      type: 'error',
      message: 'Error fetching the chats!',
      error,
    })
  }
})

router.post('/join-room', isAuth, async (req, res) => {
  const { roomId, socketId } = req.body
  try {
    const prevRooms = req.user.rooms.some((i) => i === roomId)
    if (prevRooms)
      return res
        .status(409)
        .json({ type: 'warning', message: 'You are already present in this room! 😑' })

    const room = await Room.findOneAndUpdate(
      { roomId },
      {
        $push: {
          presentUsers: {
            userId: req.user._id,
            name: req.user.name,
            socketId: socketId,
          },
        },
      },
      { new: true }
    )
    if (!room) return res.status(422).json({ type: 'error', message: "Room doesn't exist! " })
    await User.findByIdAndUpdate(req.user._id, {
      $push: { rooms: roomId },
    })
    res.json({ type: 'success', message: 'Joined the room! 🎊', data: room })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      type: 'error',
      message: 'Error fetching the chats!',
      error,
    })
  }
})

router.post('/update-socket', isAuth, async (req, res) => {
  const prevRooms = req.user.rooms.filter((room) => room)
  try {
    const room = prevRooms.map(
      async (id) =>
        await Room.findOneAndUpdate(
          { roomId: id, 'presentUsers.userId': req.user._id },
          { $set: { 'presentUsers.$.socketId': req.body.socketId } },
          { new: true }
        )
    )

    res.json({ type: 'success', message: 'Socket updated! 😀', data: room })
  } catch (error) {
    logger.error(error)
    return res.status(500).json({
      type: 'error',
      message: 'Error fetching the chats!',
      error,
    })
  }
})

module.exports = router
