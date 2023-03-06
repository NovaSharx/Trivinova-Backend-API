const router = require('express').Router()
const axios = require('axios')

router.post('/', async (req, res) => {

    let limit = `limit=${req.body.limit}`
    let category = req.body.category === 'random' ? '' : `&categories=${req.body.category}`
    let difficulty = req.body.difficulty === 'random' ? '' : `&difficulty=${req.body.difficulty}`
    let API_URL = 'https://the-trivia-api.com/api/questions?' + limit + category + difficulty

    const apiData = await axios.get(API_URL)
        .catch((error) => {
            // ***PlaceHolder***
            console.log(error)
        })

    res.json(API_URL)
})

module.exports = router