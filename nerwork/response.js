exports.success = function (req, res, message, body, status) {
  const statusCode = status || 200
  const statusMessage = message || ''

  res.status(status).send({
    error: false,
    status: statusCode,
    message: statusMessage,
    body: body
  })
}

exports.error = function (req, res, message, body, status) {
  const statusCode = status || 500
  const statusMessage = message || 'Internal server errror!'

  res.status(status).send({
    error: true,
    status: statusCode,
    message: statusMessage,
    body: body
  })
}
