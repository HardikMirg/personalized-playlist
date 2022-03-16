const express = require('express')
const spotifyWebApi = require('spotify-web-api-node')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('sono fuori di testa ma diverso da loro')
})

module.exports = router;