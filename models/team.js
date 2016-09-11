var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String }
 
});

module.exports = mongoose.model('Team', teamSchema);