const express = require('express')
const router = express.Router()
const home = require('./controller/home')
const data = require('./controller/data')

router.get('/', home.index)
router.get('/api/data', data.index)
router.use(home.notFound)

module.exports = router
