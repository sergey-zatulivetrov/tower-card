const express = require('express')
const provider = express()

provider.use(require('./provider/response'))

module.exports = provider