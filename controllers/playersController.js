var Player = require('../models/player');

//CREATE A PLAYER

function playersCreate(req, res){
  Player.create(req.body.player, function(err, player){
    if(err) return res.status(500).json(err);
  });
}

function playersIndex(req, res){
  Player.find(function(err, player){
    if(err) return res.status(500).json(err);
    return res.status(200).json(player);
  });
}

function playerShow(req, res) {
  Player.findById(req.params.id, function(err, player) {
    if(err) return res.status(500).json(err);
    if(!player) return res.status(404).json({ message: "Could not find a player with that id" });
    return res.status(200).json(player);
  });
}

function playerUpdate(req, res) {
  Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, function(err, player) {
    if(err) return res.status(400).json(err);
    return res.status(200).json(player);
  });
}

function playerDelete(req, res) {
  Player.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  });
}

module.exports = {
  create: playersCreate,
  index: playersIndex,
  show: playerShow,
  update: playerUpdate,
  delete: playerDelete
}