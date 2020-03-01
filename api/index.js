const express = require('express')
const config = require('../config.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const app = express()

app.use(bodyParser.json())
app.use(cors())

// USER
app.use('/api/user', user)
app.use('/api/auth', auth)

app.listen(config.api.port, () => {
  console.log('Api runnig on ' + config.api.port)
})
