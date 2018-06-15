const axios = require('axios')
const fs = require('fs')
const { MOTTAK_SERVICE_USERNAME, MOTTAK_SERVICE_PASSWORD } = require('../../config')
const logger = require('../logger')

module.exports = async data => {
  const options = {
    url: data.downloadUrl,
    auth: {
      username: MOTTAK_SERVICE_USERNAME,
      password: MOTTAK_SERVICE_PASSWORD
    },
    responseType: 'stream'
  }

  const callback = await new Promise(resolve => {
    axios(options)
      .then(response => {
        response.data.pipe(fs.createWriteStream('/tmp/encrypted-files.zip'))
        response.data.on('end', () => {
          logger('info', ['retrive-files', 'file downloaded'])
          data.encryptedFile = '/tmp/encrypted-files.zip'
          resolve(data)
        })
      })
      .catch(error => {
        logger('error', ['retrive-files', 'error', JSON.stringify(error)])
        throw error
      })
  })
  return callback
}
