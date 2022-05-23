const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

// import clientId, and ClientSecret from env
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const port = parseInt(process.env.PORT);
const app = express();

//app middlewares

app.use(cors());
app.use(bodyParser.json());

app.post("/login", function( req, res){
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId,
        clientSecret,
    });
    spotifyApi
        .authorizationCodeGrant(code).
        then(data => {
        res.json({
            accessToken : data.body.access_token,
            refreshToken : data.body.refresh_token,
            expiresIn: data.body.expires_in})
        })
        .catch( (err) =>{
            console.error(err);
            res.sendStatus(400)
        });
})

app.get('/test', (req, res) => {
    res.send('test succesful');
})

app.listen( port, () => {
    console.log('server running on:' , port);
});