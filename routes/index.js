const express = require('express')
const {home,  GetGeneratePlain, PostResults} = require('../controller/mainContrl.js')

const router = express.Router()
const ctrl = require('../controller/mainContrl')
router.get('/', home)
router.get('/generate', GetGeneratePlain)
router.post('/results', PostResults)

module.exports = router