const { promisify } = require('util')
const lookup360 = promisify(require('p360'))
const { p360 } = require('../../config')
const logger = require('../logger')

module.exports = async data => {
  const meta = {
    p360,
    clientService: 'CaseService',
    clientMethod: 'GetCases',
    args: {
      parameter: {
        ContactReferenceNumber: data.elevmappeId,
        Title: 'Elevmappe'
      }
    }
  }
  try {
    logger('info', ['lookup-360', 'looking up case'])
    const { GetCasesResult } = await lookup360(meta)
    if (!GetCasesResult.Successful || !Array.isArray(GetCasesResult.Cases.CaseResult)) throw new Error(GetCasesResult)
    data.caseNumber = GetCasesResult.Cases.CaseResult[0].CaseNumber
    logger('info', ['lookup-360', `case found: ${data.caseNumber}`])
    return data
  } catch (error) {
    logger('error', ['lookup-360', 'error', JSON.stringify(error)])
    throw error
  }
}
