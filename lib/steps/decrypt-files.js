const util = require('util')
const exec = util.promisify(require('child_process').exec)
const logger = require('../logger')
const deleteFile = require('../delete-file')
const { MOTTAK_SERVICE_KEY } = require('../../config')

module.exports = async data => {
  const cmsDecrypt = `openssl cms -decrypt -inform DER -inkey ${MOTTAK_SERVICE_KEY} -in ${data.encryptedFile} -out /tmp/decrypted-files.zip`
  try {
    await exec(cmsDecrypt)
    data.decryptedFiles = '/tmp/decrypted-files.zip'
    logger('info', ['decrypt-files', 'decrypted files to /tmp/decrypted-files.zip'])
    await deleteFile(data.encryptedFile)
    return data
  } catch (error) {
    logger('error', ['get-next-job-from-queue', 'error', JSON.stringify(error)])
  }
}
