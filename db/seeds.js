var mongoose = require('mongoose');
var Player = require('../models/player');
var Team = require('../models/team');

var databaseUri = require('../config/db')(process.env.NODE_ENV || "development");
mongoose.connect(databaseUri);


Team.collection.drop();
Player.collection.drop();

Team.create([{
  name: "WDI-21",
  image:"http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png",
  defence:12,
  offence:9,
  gamesWon:15,
  gamesPlayed:100

},{
  name: "the pink panthers",
  image: "http://www.fillmurray.com/500/600",
  defence:12,
  offence:9,
  gamesWon:15,
  gamesPlayed:100
},{
  name: "The Purple Cobras",
  image: "http://www.fillmurray.com/600/600",
  defence:8,
  offence:19,
  gamesWon:11,
  gamesPlayed:14
}
], function(err,teams){
  if(!err)console.log("Teams created!");

Player.create([
{
  username: "Andy",
  avatar: "./assets/andy.jpg",
  spiritualanimal: "Cat",
  // team: teams[0],
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack",
  dodge: 15,
  dip: 10,
  dive: 9,
  duck: 7,
  hits: 19,
  catches: 3,
  rebounds: 18,
  speed: 20
},
{
  username: "Axel",
  avatar: "./assets/axel.jpg",
  spiritualanimal: "Panda",
  // team: teams[0],
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack",
  dodge: 15,
  dip: 10,
  dive: 9,
  duck: 7,
  hits: 19,
  catches: 3,
  rebounds: 18,
  speed: 20

},
{
  username: "Cam",
  avatar: "./assets/cam.jpg",
  spiritualanimal: "Puppy",
  // team: teams[0],
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack",
  dodge: 15,
  dip: 10,
  dive: 9,
  duck: 7,
  hits: 19,
  catches: 3,
  rebounds: 18,
  speed: 20

},
{
  username: "Smithy",
  avatar: "./assets/smithy.jpg",
  spiritualanimal: "Donkey",
  // team: teams[0],
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack",
  dodge: 15,
  dip: 10,
  dive: 9,
  duck: 7,
  hits: 19,
  catches: 3,
  rebounds: 18,
  speed: 20

},
{
  username: "Chanse",
  avatar: "./assets/chanse.jpg",
  spiritualanimal: "Pug",
  // team: teams[1],
  github:"https://github.com/tnyrossi",
  twitter:"https://twitter.com/tonio155",
  dodge: 15,
  dip: 10,
  dive: 9,
  duck: 7,
  hits: 19,
  catches: 3,
  rebounds: 18,
  speed: 20
},
{
  username: "Adri",
  avatar: "./assets/adri.jpg",
  spiritualanimal: "jesus lizard",
  // team: teams[0],
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack",
  dodge: 15,
  dip: 10,
  dive: 9,
  duck: 7,
  hits: 19,
  catches: 3,
  rebounds: 18,
  speed: 20

}
], function(err, players){
  if(!err) console.log("Players created");
  mongoose.connection.close();
  });

});


// ,{
//   name: "Toni",
//   image: "http://www.fillmurray.com/300/300",
//   spiritualanimal: "cat",
//   team: teams[1],
//   github:"https://github.com/tnyrossi",
//   twitter:"https://twitter.com/tonio155"
// },
