const express = require('express')
const response = require('../../../network/response')
const controller = require('./index')

const router = express.Router()

router.post('/login', (req, res) => {
  controller.login(req.body.username, req.body.password)
    .then(token => response.success(req, res, 'User logged', token, 200))
    .catch(error => response.error(req, res, error.message, {}, 500))
})

module.exports = router
