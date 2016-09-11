var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  githubId: Number,
  avatar: String
});

module.exports = mongoose.model("User", userSchema);
