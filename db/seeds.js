var mongoose = require('mongoose');
var Player = require('../models/player');
var Team = require('../models/team');

var databaseUri = require('../config/db')(process.env.NODE_ENV || "development");
mongoose.connect(databaseUri);


Team.collection.drop();
Player.collection.drop();

Team.create([{
  name: "the black panthers",
  image:"http://www.fillmurray.com/200/600"

},{
  name: "the pink panthers",
  image: "http://www.fillmurray.com/500/600"
}], function(err,teams){
  if(!err)console.log("Teams created!");

Player.create([{
  name: "Adri Black",
  image: "http://www.fillmurray.com/200/200",
  spiritualanimal: "jesus lizard",
  team: teams[0],
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack"

},{
  name: "Toni",
  image: "http://www.fillmurray.com/300/300",
  spiritualanimal: "cat",
  team: teams[1],
  github:"https://github.com/tnyrossi",
  twitter:"https://twitter.com/tonio155"
},
{
  name: "Chanse Campbell",
  image: "./assets/chanse.jpg",
  spiritualanimal: "Pug",
  team: teams[1],
  github:"https://github.com/tnyrossi",
  twitter:"https://twitter.com/tonio155"
}
], function(err, players){
  if(!err) console.log("Players created");
  mongoose.connection.close();
  });

});

