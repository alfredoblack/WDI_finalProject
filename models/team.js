var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  defence: { type: Number },
  offence: { type: Number },
  gamesWon: { type: Number },
  gamesPlayed: { type: Number },
  players: [{ type: mongoose.Schema.ObjectId, ref: 'Player' }]
});

module.exports = mongoose.model('Team', teamSchema);