require('dotenv').config()
const getNextJobFromQueue = require('./lib/steps/get-next-job-from-queue')
const retriveFiles = require('./lib/steps/retrive-files')
const decryptFiles = require('./lib/steps/decrypt-files')
const unzipFiles = require('./lib/steps/unzip-files')
const markRetrived = require('./lib/steps/mark-retrived')
const logger = require('./lib/logger')

logger('info', ['index', 'start'])

getNextJobFromQueue()
  .then(retriveFiles)
  .then(decryptFiles)
  .then(unzipFiles)
  .then(markRetrived)
  .catch(error => {
    logger('error', ['index', 'error', JSON.stringify(error && error.message ? error.message : error)])
    process.exit(1)
  })
