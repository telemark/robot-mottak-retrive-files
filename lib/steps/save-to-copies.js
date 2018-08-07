const saveFile = require('../save-file')
const logger = require('../logger')
const { COPIES_DIRECTORY_PATH } = require('../../config')

module.exports = async data => {
  logger('info', ['save-to-copies', data._id])
  const filePath = `${COPIES_DIRECTORY_PATH}/${data._id}.json`
  await saveFile(filePath, data)
  return data
}
