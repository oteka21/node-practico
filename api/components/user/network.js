const express = require('express')
const router = express.Router()
const response = require('../../../nerwork/response')
const controller = require('./index')

router.get('/', (req, res) => {
  controller.list()
    .then(lista => response.success(req, res, 'Lista de usuarios', lista, 200))
    .catch(error => response.success(req, res, 'Error!', error, 500))
})

router.get('/:id', (req, res) => {
  controller.get(+req.params.id)
    .then(user => response.success(req, res, 'Usuario', user, 200))
})

router.post('/', (req, res) => {
  controller.upset(req.body)
    .then(list => console.log(list) || response.success(req, res, 'Usuario', list, 200))
})

module.exports = router
