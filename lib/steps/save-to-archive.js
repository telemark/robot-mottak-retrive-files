const saveFile = require('../save-file')
const logger = require('../logger')
const { ARCHIVE_DIRECTORY_PATH } = require('../../config')

module.exports = async data => {
  logger('info', ['save-to-archive', data._id])
  const filePath = `${ARCHIVE_DIRECTORY_PATH}/${data._id}.json`
  await saveFile(filePath, data)
  return data
}
