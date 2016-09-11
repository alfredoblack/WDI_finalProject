var mongoose = require('mongoose');
var Player = require('../models/player');
var Team = require('../models/team');

var databaseUri = require('../config/db')(process.env.NODE_ENV || "development");
mongoose.connect(databaseUri);

Player.collection.drop();
Team.collection.drop();

Player.create([{
  name: "Adri Black",
  image: "www.fillmurray.com/200/200"
  spiritualanimal: "jesus lizard"
  github:"https://github.com/alfredoblack"
  twitter:"https://twitter.com/AdrianaBllack"
}, {
  name: "Toni",
  image: "www.fillmurray.com/300/300"
  spiritualanimal: "cat"
  github:"https://github.com/tnyrossi"
  twitter:"https://twitter.com/tonio155"
}], function(err, players) {
  if(!err) console.log("Players created!");

  Team.create([{
    name: "the black panthers",
    image: "www.fillmurray.com/200/600",
    player: teams[0]
  },  {
    name: "the pink panthers",
    image: "www.fillmurray.com/500/600",
    player: teams[1]
  }], function(err, films) {
    if(!err) console.log("Teams created!");
    mongoose.connection.close();
  });

});