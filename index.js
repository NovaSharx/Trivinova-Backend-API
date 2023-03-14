// Modules and Globals
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
app.get('/', async (req, res) => {
    res.send('Welcome to the Trivinova API!')
})

// Controllers
app.use('/trivia', require('./controllers/trivia'))
app.use('/users', require('./controllers/users'))
app.use('/highscores', require('./controllers/highscores'))

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Trivinova app listening on port ${process.env.PORT}`)
})