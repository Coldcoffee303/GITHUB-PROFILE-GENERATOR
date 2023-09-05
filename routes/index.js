const express = require('express')
const {home, generateAuto, generatePlain, results} = require('../controller/mainContrl.js')

const router = express.Router()
const ctrl = require('../controller/mainContrl')
router.get('/', home)
router.get('/generate/plain', generatePlain)
router.get('/generate/auto', generateAuto)
router.post('/results', results)

module.exports = router