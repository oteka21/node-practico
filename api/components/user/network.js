const express = require('express')
const router = express.Router()
const response = require('../../../nerwork/response.js')

router.get('/', (req, res) => {
  response.success(req, res, 'todo bien, todo correcto!', 200)
})

module.exports = router
