const axios = require('axios')
const { MOTTAK_SERVICE_KVITTER_URL, MOTTAK_SERVICE_USERNAME, MOTTAK_SERVICE_PASSWORD } = require('../../config')
const logger = require('../logger')

module.exports = async data => {
  const options = {
    url: `${MOTTAK_SERVICE_KVITTER_URL}/${data.id}`,
    method: 'post',
    auth: {
      username: MOTTAK_SERVICE_USERNAME,
      password: MOTTAK_SERVICE_PASSWORD
    }
  }

  try {
    await axios(options)
    logger('info', ['mark-retrived', `mark file retrived to ${options.url}`])
    return data
  } catch (error) {
    logger('error', ['get-next-job-from-queue', 'error', JSON.stringify(error.response.data)])
    throw error
  }
}
