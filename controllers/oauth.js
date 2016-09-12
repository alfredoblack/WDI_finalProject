var User = require('../models/user');
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
      headers: { "User-Agent": "Request-Promise" }
    })
  })
  .then(function(profile) {
    return User.findOne({ email: profile.email })
      .then(function(user) {
        if(user) {
          user.githubId = profile.id;
          user.avatar = profile.avatar_url;
        } else {
          user = new User({
            username: profile.login,
            email: profile.email,
            githubId: profile.id,
            avatar:profile.avatar_url
          });
        }

        return user.save();
      })
  })
  .then(function(user) {
    var payload = {
      _id: user._id,
      avarat: user.avatar,
      username: user.username
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
          screen_name: token.screen_name
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
      return User.findOne({ twitterId: profile.id })
        .then(function(user) {
          if(user) {
            user.twitterId = profile.id;
            user.avatar = profile.profile_image_url;
          }
          else {
            user = new User({
              username: profile.name,
              twitterId: profile.id,
              avatar: profile.profile_image_url
            });
          }

          return user.save();
        });
    })
    .then(function(user) {
      var payload = {
        _id: user._id,
        username: user.username,
        avatar: user.avatar
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