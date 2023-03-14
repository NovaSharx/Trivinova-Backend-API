const router = require('express').Router()
const db = require('../models')

router.get('/', async (req, res) => {
    res.send('Authentication GET route.')
})

module.exports = router