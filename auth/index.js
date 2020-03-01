const jwdt = require('jsonwebtoken')

function sign (data) {
  return jwdt.sign(data, 'secreto')
}

module.exports = {
  sign
}
