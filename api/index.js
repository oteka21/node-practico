const express = require('express')
const config = require('../config.js')
const user = require('./components/user/network.js')
const app = express()

// USER
app.use('/api/user', user)

app.listen(config.api.port, () => {
  console.log('Api runnig on' + config.api.port)
})
