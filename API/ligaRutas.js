const express = require('express')
const liga = require('./ligaControlador')

const router = express.Router()

router.get = ('/', liga.getLiga)
router.post = ('/', liga.createLiga)
router.put = ('/', liga.updateLiga)
router.delete = ('/', liga.deleteLiga)

module.exports = router