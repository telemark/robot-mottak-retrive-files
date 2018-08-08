module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Louie Louie, oh no, I got to go Louie Louie, oh no, I got to go',
  MOTTAK_SERVICE_USERNAME: process.env.MOTTAK_SERVICE_USERNAME || 'username',
  MOTTAK_SERVICE_PASSWORD: process.env.MOTTAK_SERVICE_PASSWORD || 'password',
  MOTTAK_SERVICE_KEY: process.env.MOTTAK_SERVICE_KEY || `${process.cwd()}/certs/key.pem`,
  MOTTAK_SERVICE_KVITTER_URL: process.env.MOTTAK_SERVICE_KVITTER_URL || 'https://svarut.ks.no/tjenester/svarinn/kvitterMottak/forsendelse',
  AVTALE_TJENESTE_URL: process.env.AVTALE_TJENESTE_URL || 'https://log.avtale.tjeneste.win/agreements/parts/',
  JOBS_DIRECTORY_PATH: process.env.JOBS_DIRECTORY_PATH || 'test/directories/jobs',
  ARCHIVE_DIRECTORY_PATH: process.env.ARCHIVE_DIRECTORY_PATH || 'test/directories/archive',
  PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'robot-mottak-retrive-files',
  PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
  PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345,
  p360: {
    user: process.env.P360WS_USER || 'domain/username', // username
    password: process.env.P360WS_PASSWORD || 'password', // passord
    baseUrl: process.env.P360WS_BASEURL || 'http://tfk-fh-siweb01.login.top.no:8088/SI.WS.Core/SIF/',
    options: {
      ignoredNamespaces: true
    }
  }
}
