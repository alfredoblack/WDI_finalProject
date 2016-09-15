var Player = require('../models/player');
var request = require('request-promise');
var jwt = require('jsonwebtoken');
var secret = require('../config/tokens').secret;
var qs = require('qs');

function github(req, res) {

  request.post({
    url: "https://github.com/login/oauth/access_token",
    qs: {
      client_id: process.env.GITHUB_API_KEY,
      client_secret: process.env.GITHUB_API_SECRET,
      code: req.body.code
    },
    json: true
  })
  .then(function(response) {
    return request.get({
      url: "https://api.github.com/user",
      qs: { access_token: response.access_token },
      headers: { "User-Agent": "Request-Promise" },
      json: true
    })
  })
  .then(function(profile) {
    return Player.findOne({ githubId: profile.id })
      .then(function(player) {
        if(player) {
          player.githubId = profile.id;
          player.avatar = profile.avatar_url;
          player.github = profile.html_url;
        } else {
          player = new Player({
            username: profile.login,
            email: profile.email,
            githubId: profile.id,
            github: profile.html_url,
            avatar: profile.avatar_url
          });
        }
        console.log("Player saving.. ", player);
        return player.save();
      })
  })
  .then(function(player) {
    var payload = {
      _id: player._id,
      username: player.username,
      avatar: player.avatar
    }

    var token = jwt.sign(payload, secret, { expiresIn: "24h" });

    res.status(200).json({ token: token });

  })
  .catch(function(err) {
    console.log(err);
  });
}


function twitter(req, res) {
  if (!req.body.oauth_token || !req.body.oauth_verifier) {

    return request.post({
      url: "https://api.twitter.com/oauth/request_token",
      oauth: {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        callback: req.body.redirectUri
      }
    })
    .then(function(response) {
      var token = qs.parse(response);
      res.status(200).send(token);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });

  } else {
    return request.post({
      url: "https://api.twitter.com/oauth/access_token",
      form: {
        oauth_token: req.body.oauth_token,
        oauth_verifier: req.body.oauth_verifier
      }
    })
    .then(function(token) {
      var token = qs.parse(token);

      return request.get({
        url: "https://api.twitter.com/1.1/users/show.json",
        qs: {
          screen_name: token.screen_name,
          // url: token.url
        },
        oauth: {
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          oauth_token: token.oauth_token
        },
        json: true
      });
    })
    .then(function(profile) {
      return Player.findOne({ twitterId: profile.id })
        .then(function(player) {
          // reference for sample profile:
          // https://dev.twitter.com/rest/reference/get/users/show
          if(player) {
            console.log('twitter profile:', profile);
            player.url = profile.url;
            // player.username = profile.screen_name; // TODO: check this is correct
            player.username = profile.name; 
            player.twitterId = profile.id;
            player.avatar = profile.profile_image_url;
            // player.address= profile.url;

          }
          else {
            player = new Player({
              username: profile.name, // TODO: check this is correct
              // username: profile.screen_name, // TODO: check this is correct
              twitterId: profile.id,
              avatar: profile.profile_image_url,
              // address: profile.url
            });
          }

          return player.save();
        });
    })
    .then(function(player) {
      var payload = {
        _id: player._id,
        username: player.username,
        avatar: player.avatar,
        // address: player.url
      };

      var token = jwt.sign(payload, secret, { expiresIn: '24h' });

      res.status(200).json({ token: token });
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
  }
}

module.exports = {
  github: github,
  twitter: twitter
}