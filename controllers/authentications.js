var Player = require('../models/player');
var jwt = require('jsonwebtoken');
var secret = require('../config/tokens').secret;


function register(req, res) {
  Player.create(req.body, function(err, player) {
    if(err) return res.status(400).json(err);

    var payload = { _id: player._id, username: player.username, avatar: player.avatar };
    var token = jwt.sign(payload, secret, { expiresIn: 60*60*24 });

    return res.status(200).json({
      message: "Success",
      token: token
    });
  });
}

function login(req, res) {
  Player.findOne({ email: req.body.email }, function(err, player) {
    if(err) res.send(500).json(err);
    if(!player || !player.validatePassword(req.body.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    var payload = { _id: player._id, username: player.username, avatar: player.avatar };
    var token = jwt.sign(payload, secret, { expiresIn: 60*60*24 });

    return res.status(200).json({
      message: "Success",
      token: token
    });
  });
}

module.exports = {
  register: register,
  login: login
}