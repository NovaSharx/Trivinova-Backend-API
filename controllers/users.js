const router = require('express').Router()
const db = require('../models')

const { User } = db

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router