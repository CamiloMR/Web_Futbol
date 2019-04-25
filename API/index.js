const express = require('express')

const ligaRutas = require('./ligaRutas')

const router = express.Router()

router.use('/api/', ligaRutas)

module.exports = router