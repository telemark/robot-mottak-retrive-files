module.exports = {
  MOTTAK_SERVICE_USERNAME: process.env.MOTTAK_SERVICE_USERNAME || 'username',
  MOTTAK_SERVICE_PASSWORD: process.env.MOTTAK_SERVICE_PASSWORD || 'password',
  MOTTAK_SERVICE_KEY: process.env.MOTTAK_SERVICE_KEY || `${process.cwd()}/certs/key.pem`,
  JOBS_DIRECTORY_PATH: process.env.JOBS_DIRECTORY_PATH || 'test/directories/jobs',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'robot-mottak-retrive-files',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
}
