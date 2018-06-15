const axios = require('axios')
const generateSystemJwt = require('./generate-system-jwt')
const config = require('../config')
const logger = require('./logger')

module.exports = async url => {
  logger('info', ['get-data', url, 'start'])
  let options = {
    url,
    headers: {
      Authorization: generateSystemJwt()
    }
  }
  if (config.AUTH_USERNAME && config.AUTH_PASSWORD) {
    options.auth = {
      username: config.AUTH_USERNAME,
      password: config.AUTH_PASSWORD
    }
  }
  try {
    const { data } = await axios(options)
    logger('info', ['get-data', url, 'finished'])
    return data
  } catch (error) {
    throw error
  }
}
