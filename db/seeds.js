var mongoose = require('mongoose');
var Player = require('../models/player');
var Team = require('../models/team');

var databaseUri = require('../config/db')(process.env.NODE_ENV || "development");
mongoose.connect(databaseUri);


Team.collection.drop();
Player.collection.drop();

Player.create([{
  username: "Andy",
  email: "andy@ga.co",
  avatar: "./assets/andy.jpg",
  spiritualanimal: "Cat",
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack",
  dodge: 5,
  dip: 19,
  dive: 9,
  duck: 7,
  hits: 19,
  catches: 10,
  rebounds: 3,
  speed: 10,
  password: "password",
  passwordConfirmation: "password"
},{
  username: "Axel",
  email: "axel@ga.co",
  avatar: "./assets/axel.jpg",
  spiritualanimal: "Panda",
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack",
  dodge: 15,
  dip: 6,
  dive: 19,
  duck: 27,
  hits: 9,
  catches: 10,
  rebounds: 8,
  speed: 15,
  password: "password",
  passwordConfirmation: "password"
},{
  username: "Cam",
  email: "cam@ga.co",
  avatar: "./assets/cam.jpg",
  spiritualanimal: "Puppy",
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack",
  dodge: 13,
  dip: 20,
  dive: 12,
  duck: 17,
  hits: 9,
  catches: 31,
  rebounds: 8,
  speed: 21,
  password: "password",
  passwordConfirmation: "password"
},{
  username: "Smithy",
  email: "smithy@ga.co",
  avatar: "./assets/smithy.jpg",
  spiritualanimal: "Donkey",
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack",
  dodge: 11,
  dip: 12,
  dive: 12,
  duck: 12,
  hits: 13,
  catches: 13,
  rebounds: 8,
  speed: 14,
  password: "password",
  passwordConfirmation: "password"
},{
  username: "Chanse",
  email: "chanse@ga.co",
  avatar: "./assets/chanse.jpg",
  spiritualanimal: "Pug",
  github:"https://github.com/tnyrossi",
  twitter:"https://twitter.com/tonio155",
  dodge: 15,
  dip: 10,
  dive: 9,
  duck: 7,
  hits: 19,
  catches: 3,
  rebounds: 18,
  speed: 20,
  password: "password",
  passwordConfirmation: "password"
},{
  username: "Adri",
  email: "adri@ga.co",
  avatar: "./assets/adri.jpg",
  spiritualanimal: "jesus lizard",
  github:"https://github.com/alfredoblack",
  twitter:"https://twitter.com/AdrianaBllack",
  dodge: 5,
  dip: 12,
  dive: 19,
  duck: 27,
  hits: 9,
  catches: 13,
  rebounds: 17,
  speed: 25,
  password: "password",
  passwordConfirmation: "password"
}], function(err, players){
  if(!err) console.log("Players created");
  Team.create([{
    name: "WDI-21",
    image:"http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png",
    defence:12,
    offence:9,
    gamesWon:15,
    gamesPlayed:100,
    players: [players[0], players[1]]
  },{
    name: "the pink panthers",
    image: "http://www.fillmurray.com/500/600",
    defence:12,
    offence:9,
    gamesWon:15,
    gamesPlayed:100,
    players: [players[2], players[3]]
  },{
    name: "The Purple Cobras",
    image: "http://www.fillmurray.com/600/600",
    defence:8,
    offence:19,
    gamesWon:11,
    gamesPlayed:14,
    players: [players[4], players[5]]
  }], function(err,teams){
    if(!err) console.log("Teams created!");
    mongoose.connection.close();
  });
});