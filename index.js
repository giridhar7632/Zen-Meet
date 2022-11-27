const server = require('./src/server')
const logger = require('./src/utils/logger')
const { PORT } = require('./src/utils/config')

server.listen(PORT, (err) => {
  if (err) {
    logger.error(err?.message)
  }
  logger.info(`🚀 Listening on port ${PORT}`)
})
