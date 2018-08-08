require('dotenv').config()
const getNextJobFromQueue = require('./lib/steps/get-next-job-from-queue')
const retriveFiles = require('./lib/steps/retrive-files')
const decryptFiles = require('./lib/steps/decrypt-files')
const unzipFiles = require('./lib/steps/unzip-files')
const markRetrived = require('./lib/steps/mark-retrived')
const base64file = require('./lib/steps/base64-file')
const getAgreementUserId = require('./lib/steps/get-agreement-user-id')
const lookup360 = require('./lib/steps/lookup-360')
// const archive360 = require('./lib/steps/archive-360')
// const signoff360 = require('./lib/steps/signoff-360')
const saveToArchive = require('./lib/steps/save-to-archive')
const removeFromQueue = require('./lib/steps/remove-from-queue')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getNextJobFromQueue()
  .then(retriveFiles)
  .then(decryptFiles)
  .then(unzipFiles)
  .then(base64file)
  .then(getAgreementUserId)
  .then(lookup360)
//  .then(archive360)
//  .then(signoff360)
  .then(markRetrived)
  .then(saveToArchive)
  .then(removeFromQueue)
  .catch(error => {
    logger('error', ['index', 'error', JSON.stringify(error && error.message ? error.message : error)])
    process.exit(1)
  })
