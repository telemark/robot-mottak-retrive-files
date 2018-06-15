const fs = require('fs').promises
const logger = require('./logger')

module.exports = async filePath => {
  try {
    await fs.unlink(filePath)
    logger('info', ['delete-file', filePath, 'deleted'])
  } catch (error) {
    logger('info', ['delete-file', filePath, 'deleted'])
    throw error
  }
}
