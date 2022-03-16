const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const router = express.Router()

const redirectUri = process.env.REDIRECT_URI;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

router.post("/", (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
      redirectUri,
      clientId,
      clientSecret,
    });
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  });

module.exports = router;