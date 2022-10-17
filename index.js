const app = require('./src/app')
const logger = require('./src/utils/logger')
const { PORT } = require('./src/utils/config')

app.listen(PORT, (err) => {
  if (err) {
    logger.error(err?.message)
  }
  logger.info(`🚀 Listening on port ${PORT}`)
})
