const http = require('http')
const socket = require('socket.io')
const app = require('./app')
const Room = require('./models/room')
const logger = require('./utils/logger')

const users = {}
const socketToRoom = {}
const screenShareInRoom = {}
const server = http.createServer(app)
const io = socket(server, { cors: { origin: '*' } })

io.on('connection', async (socket) => {
  socket.on('join room', async ({ roomId, options, name, userId }) => {
    const data = await Room.findOneAndUpdate(
      { roomId },
      { $push: { meetingUsers: { id: socket.id, name, options, userId } } },
      { upsert: true, returnOriginal: false }
    )
    logger.info(data)
    if (data.transcriptEnabled.userId != null) {
      io.to(socket.id).emit('transcript updated', {
        enabled: true,
        name: data.transcriptEnabled.name,
      })
    }
    if (data == null) {
      return socket.emit('all users', [])
    } else {
      socketToRoom[socket.id] = roomId
      return socket.emit('all users', data.meetingUsers)
    }
  })

  socket.on('sending signal', (payload) => {
    const { signal, callerId, options, name } = payload
    io.to(payload.userToSignal).emit('user joined', { signal, callerId, options, name })
  })

  socket.on('returning signal', (payload) => {
    const { signal, id, options, name } = payload
    io.to(payload.callerId).emit('receiving returned signal', { signal, id, options, name })
  })

  socket.on('disconnect meet', async ({ name, roomId, userId }) => {
    logger.info(userId)
    const room = await Room.findOneAndUpdate(
      { roomId },
      { $pull: { meetingUsers: { userId } } },
      { multi: true, new: true }
    )
    logger.info(`User ${socket.id} left from room: ${roomId}`)
    if (room && room.meetingUsers) {
      room.meetingUsers.forEach((user) => {
        if (userId !== user.userId) {
          io.to(user.id).emit('user left', { id: socket.id, name })
          io.to(user.id).emit('user left screem stream', socket.id + '-screen-share')
        }
      })
    }

    const data = await Room.findOne({ roomId })
    logger.info(data)
    if (data) {
      const room = await Room.findOneAndUpdate(
        { roomId },
        {
          $set: {
            screenShareInRoom: {
              id: data.screenShareInRoom.id == socket.id ? null : data.screenShareInRoom.id,
              name: data.screenShareInRoom.name == socket.name ? null : data.screenShareInRoom.name,
            },
            transcriptEnabled: {
              userId: data.meetingUsers.length == 0 ? null : data.transcriptEnabled.userId,
              name: data.meetingUsers.length == 0 ? null : data.transcriptEnabled.name,
            },
          },
        },
        {
          new: true,
          upsert: true,
        }
      )

      if (room && room.meetingUsers && data.screenShareInRoom.id == socket.id) {
        room.meetingUsers.forEach((user) => {
          if (socket.id !== user.id) {
            io.to(user.id).emit('screen share update', { updateStream: false, id: socket.id, name })
          }
        })
      }
    }
  })

  socket.on('change', async (payload) => {
    const data = await Room.findOneAndUpdate(
      { roomId: payload.roomId, 'meetingUsers.id': socket.id },
      {
        $set: { 'meetingUsers.$.options': { video: payload.video, audio: payload.audio } },
      },
      { returnOriginal: false }
    )

    logger.info(data)
    socket.broadcast.emit('change', payload)
  })

  socket.on('send message', async (payload) => {
    const room = await Room.findOneAndUpdate(
      { roomId: payload.roomId },
      {
        $push: {
          chats: { userId: payload.userId, name: payload.name, message: payload.message },
        },
      },
      { new: true }
    )

    if (room && room.presentUsers) {
      room.presentUsers.forEach((user) => {
        if (socket.id !== user.socketId) io.to(user.socketId).emit('received message', payload)
      })
    }
  })

  socket.on('sending screen stream', (payload) => {
    io.to(payload.userToSignal).emit('user added screen stream', {
      signal: payload.signal,
      callerId: payload.callerId,
    })
  })

  socket.on('returning screen stream', (payload) => {
    io.to(payload.callerId).emit('receiving returned screen stream', {
      signal: payload.signal,
      id: socket.id + '-screen-share',
    })
  })

  socket.on('screen stream update', async (payload) => {
    logger.info(
      `User ${socket.id} ${payload.updateStream ? 'started' : 'stopped'} screen sharing in room: ${
        payload.roomID
      }`
    )

    const room = await Room.findOneAndUpdate(
      { roomId: payload.roomId },
      {
        $set: {
          screenShareInRoom: {
            id: payload.updateStream ? socket.id : null,
            name: payload.updateStream ? payload.name : null,
          },
        },
      },
      { upsert: true, returnOriginal: false }
    )

    if (room && room.meetingUsers) {
      room.meetingUsers.forEach((user) => {
        if (socket.id !== user.id)
          io.to(user.id).emit('screen share update', {
            updateStream: payload.updateStream,
            id: socket.id,
            name: payload.name,
          })
      })
    }
  })

  socket.on('transcript enabled', async (payload) => {
    logger.info(payload)
    const room = await Room.findOneAndUpdate(
      { roomId: payload.roomId },
      {
        $set: {
          transcriptEnabled: {
            userId: payload.enabled ? payload.userId : null,
            name: payload.enabled ? payload.name : null,
          },
        },
      },
      { new: true }
    )

    if (room && room.meetingUsers) {
      room.meetingUsers.forEach((user) => {
        if (socket.id !== user.id)
          io.to(user.id).emit('transcript updated', {
            enabled: payload.enabled,
            name: payload.name,
          })
      })
    }
  })

  socket.on('screen streaming running for new user', async (payload) => {
    const data = await Room.findOne({ roomID: payload.roomID })
    logger.info('new stream', data)
    if (data.screenShareInRoom.id) {
      io.to(socket.id).emit('screen share update', {
        updateStream: true,
        id: data.screenShareInRoom.id,
        name: data.screenShareInRoom.name,
      })
    }
  })
})

module.exports = server
