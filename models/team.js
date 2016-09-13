var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  player: {type: mongoose.Schema.ObjectId, ref: 'Player' }
 
});

module.exports = mongoose.model('Team', teamSchema);