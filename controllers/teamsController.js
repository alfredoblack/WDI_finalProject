var Team = require('../models/team');

function teamIndex(req, res) {
  Team.find()
    .then(function(teams) {
      res.status(200).json(teams)
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function teamShow(req, res) {
  Team.findById(req.params.id)
    .then(function(team) {
      res.status(200).json(team);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function teamCreate(req, res) {
  Team.create(req.body)
    .then(function(team) {
      res.status(201).json(team);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function teamUpdate(req, res) {
  Team.findById(req.params.id)
    .then(function(team) {
      for(key in req.body) team[key] = req.body[key];
      return team.save();
    })
    .then(function(team) {
      res.status(200).json(team);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

function teamDelete(req, res) {
  Team.findById(req.params.id)
    .then(function(team) {
      return team.remove();
    })
    .then(function() {
      res.status(204).end();
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
}

module.exports = {
  index: teamIndex,
  show: teamShow,
  create: teamCreate,
  update: teamUpdate,
  delete: teamDelete
}