const axios = require('axios')
const generateJwt = require('../generate-jwt')
const logger = require('../logger')
const { AVTALE_TJENESTE_URL } = require('../../config')

module.exports = async data => {
  const options = {
    url: AVTALE_TJENESTE_URL + data.svarPaForsendelse,
    headers: generateJwt()
  }
  try {
    logger('info', ['get-agreement-user-id'], [`getting info from ${options.url}`])
    const { data: res } = await axios(options)
    console.log(res)
    data.elevmappeId = res[0].uid // For elevmappe
    return data
  } catch (error) {
    console.log(error)
    logger('error', ['get-agreement-user-id', 'error', JSON.stringify(error.response.data)])
    throw error
  }
}
