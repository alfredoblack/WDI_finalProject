var Team = require('../models/team');

//CREATE A PLAYER

function teamsCreate(req, res){
  Team.create(req.body.team, function(err, team){
    if(err) return res.status(500).json(err);
  });
}

function teamsIndex(req, res){
  Team.find(function(err, team){
    if(err) return res.status(500).json(err);
    return res.status(200).json(team);
  });
}

function teamShow(req, res) {
  Team.findById(req.params.id, function(err, team) {
    if(err) return res.status(500).json(err);
    if(!team) return res.status(404).json({ message: "Could not find a team with that id" });
    return res.status(200).json(team);
  });
}

function teamUpdate(req, res) {
  Team.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, function(err, team) {
    if(err) return res.status(400).json(err);
    return res.status(200).json(team);
  });
}

function teamDelete(req, res) {
  Team.findByIdAndRemove(req.params.id, function(err) {
    if(err) return res.status(500).json(err);
    return res.status(204).send();
  });
}

module.exports = {
  create: teamsCreate,
  index: teamsIndex,
  show: teamShow,
  update: teamUpdate,
  delete: teamDelete
}