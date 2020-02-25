const express = require('express')
const router = express.Router()
const response = require('../../../nerwork/response')
const controller = require('./controller')

router.get('/', (req, res) => {
  const lista = controller.list()
  response.success(req, res, 'todo bien, todo correcto!', lista, 200)
})

module.exports = router
