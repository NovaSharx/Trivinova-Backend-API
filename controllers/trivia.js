const router = require('express').Router()
const axios = require('axios')

router.post('/', async (req, res) => {

    let limit = `limit=${req.body.limit}`
    let category = req.body.category === 'random' ? '' : `&categories=${req.body.category}`
    let difficulty = req.body.difficulty === 'random' ? '' : `&difficulty=${req.body.difficulty}`
    let API_URL = 'https://the-trivia-api.com/api/questions?' + limit + category + difficulty

    // Research on how to handle asynchronous axios calls
    const apiResponse = await axios.get(API_URL)
        .catch(error => {
            console.log(error) // *** PlaceHolder ***
        })

    res.json(apiResponse.data)
})

module.exports = router