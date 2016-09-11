var Player = require('../models/player');

function playerIndex(req, res) {
  Player.find()
    .populate('team')
    .then(function(players) {
      res.status(200).json(players)
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).json(err);
    });
}

function playerShow(req, res) {
  Player.findById(req.params.id)
    .populate('team')
    .then(function(player) {
      res.status(200).json(player);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function playerCreate(req, res) {
  Player.create(req.body)
    .then(function(player) {
      return Player.findById(player._id)
        .populate('team');
    })
    .then(function(player) {
      res.status(201).json(player);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function playerUpdate(req, res) {
  Player.findById(req.params.id)
    .then(function(player) {
      for(key in req.body) player[key] = req.body[key];
      return player.save();
    })
    .then(function(player) {
      return Player.findById(player._id)
        .populate('team');
    })
    .then(function(player) {
      res.status(200).json(player);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).json(err);
    });
}

function playerDelete(req, res) {
  Player.findById(req.params.id)
    .then(function(player) {
      return player.remove();
    })
    .then(function() {
      res.status(204).end();
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}


module.exports = {
  index: playersIndex,
  create: playersCreate,
  show: playerShow,
  update: playerUpdate,
  delete: playerDelete
}