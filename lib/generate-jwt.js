const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config')
const pkg = require('../package.json')

module.exports = () => {
  const payload = {
    system: pkg.name,
    version: pkg.version
  }

  const options = {
    expiresIn: '1m',
    issuer: 'https://auth.t-fk.no'
  }

  const token = jwt.sign(payload, JWT_SECRET, options)
  return { Authorization: `Bearer ${token}` }
}
