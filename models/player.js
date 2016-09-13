var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
  // name: { type: String, required: true },
  // image: { type: String },
  // spiritualanimal: { type: String, unique: true },
  // github: { type: String, required: true, unique: true },
  // twitter: { type: String, required: true, unique: true },
  // team: { type: mongoose.Schema.ObjectId, ref: 'Team' }
   username: String,
   email: String,
   githubId: Number,
   avatar: String
});

module.exports = mongoose.model('Player', playerSchema);