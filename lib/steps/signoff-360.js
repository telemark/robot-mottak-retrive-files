const { promisify } = require('util')
const archive360 = promisify(require('p360'))
const logger = require('../logger')
const { p360 } = require('../../config')

module.exports = async data => {
  const meta = {
    p360,
    clientService: 'DocumentService',
    clientMethod: 'SignOffDocument',
    args: {
      parameter: {
        Document: data.documentNumber,
        ResponseCode: 'TO'
      }
    }
  }
  try {
    logger('info', ['signoff-360', 'signoff document'])
    const res = await archive360(meta)
    console.log(res)
    return data
  } catch (error) {
    logger('error', ['signoff-360', 'error', JSON.stringify(error)])
    throw error
  }
}
