const decompress = require('decompress')
const deleteFile = require('../delete-file')
const logger = require('../logger')

module.exports = async data => {
  let documentName = ''
  const options = {
    filter: file => {
      if (file.path.endsWith('.pdf')) {
        documentName = file.path
      }
      return file.path.endsWith('.pdf')
    }
  }

  try {
    logger('info', ['unzip-files', data.decryptedFiles])
    await decompress(data.decryptedFiles, '/tmp/', options)
    await deleteFile(data.decryptedFiles)
    data.fileName = documentName
    data.documentName = '/tmp/' + documentName
    return data
  } catch (error) {
    throw error
  }
}
