var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var bluebird = require('bluebird');
var jwt = require('jsonwebtoken');

var request = require('request-promise');
var qs = require('qs');

var port = process.env.PORT || 3000;
var environment = app.get('env');

var routes = require('./config/routes');

var databaseUri = require('./config/db')(environment);

mongoose.Promise = bluebird;
mongoose.connect(databaseUri);
// mongoose.connect("mongodb://localhost/kit-dodgeball-app");


if('test' !== environment) {
  app.use(require('morgan')('dev'));
}

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', routes);

var server = app.listen(port, function(){
  console.log("express is working on " + port);
});

// This is needed for sockets
var io = require("socket.io")(server);
var Twit = require("twit");
var twitter = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var stream = twitter.stream("statuses/filter", {track: ["dodgeball", "generalassembly", "#code"]});
io.on("connect", function(socket){
  stream.on("tweet", function(tweet){
    var data = {};
    data.name = tweet.user.name;
    data.text = tweet.text;
    data.user_profile_image = tweet.user.profile_image_url;
    socket.emit("tweets", data);
  });
});


module.exports = app;