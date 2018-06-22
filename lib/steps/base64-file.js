const fs = require('fs').promises
const deleteFile = require('../delete-file')
const logger = require('../logger')

module.exports = async data => {
  logger('info', ['base64-file', `reading file ${data.documentName}`])
  const file = await fs.readFile(data.documentName)
  const b64file = Buffer.from(file).toString('base64')
  await deleteFile(data.documentName)
  data.file = b64file
  return data
}
