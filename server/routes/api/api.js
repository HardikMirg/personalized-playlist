const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const router = express.Router()

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const redirectURI = process.env.REDIRECT_URI

const spotifyApi = new SpotifyWebApi({
    clientId: clientID,
    clientSecret: clientSecret,
    redirectUri: redirectURI
})

spotifyApi.setAccessToken('BQDu4Fez_wf7n-QeebH-g-eO9N7JPCSj2lAKArNw-pWGnvrsU8SPFqiqedLXgk0RWhlMqPaiGfzaQZ9Q5OsWtPrMUdLqP_OMXPi1DbdwXGDXd12oidW-eYMdg3le5Tnob9G_zYEmdWqGG4jPQfmJiuNqUHIcPipVxH-L3w')

router.get('/', (req, res) => {
    
    spotifyApi.searchTracks('believer')
        .then((data) => {
            let ID = data.body.tracks.items[0].id

            spotifyApi.getAudioAnalysisForTrack(ID)
                .then((data) => {
                    res.send(data.body)
                })
                .catch((err) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.send(err)
        })

})

module.exports = router