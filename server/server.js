const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

// import clientId, and ClientSecret from env
clientId = process.env.CLIENT_ID;
clientSecret = process.env.CLIENT_SECRET;

const app = express();

app.post("login", function( req, res){
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUrl: "http://localhost:3000",
        clientId,
        clientSecret,
    });
    spotifyApi.authorizationCodeGrant(code).then(data => res.json({
        accessToken : data.body.access_token,
        refreshToken : data.body.refresh_token,
        expiresIn: data.body.expires_in}))
        .catch(res.sendStatus(400));
})