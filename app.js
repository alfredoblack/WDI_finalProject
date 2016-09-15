var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var bluebird = require('bluebird');
var jwt = require('jsonwebtoken');
var Twit = require('twit');

var passwords = require('./config/tokens.js');
console.log(passwords);

// var T = new Twit(passwords);

// var params = { 
//   q: 'rainbow', 
//   count: 2 
// };

// T.get('search/tweets', params, gotData);
//   function gotData(err, data, response) {
//     console.log(data)
//     // var tweets = data.statuses
//     // for(var i = 0; i< tweets.length; i++){
//     //   console.log(tweets[i].text);
//     // }
 
// };

// // function makeTweet(){
// //   var tweet = {
// //     status: 'hello world! this tweet is brought to you from node.js!'
// //   }

// //   T.post('statuses/update',tweet, tweeted);

// //   function tweeted(err, data, response){
// //     if(err){
// //       console.log('something went wrong ...' + err);
// //     } else {
// //       console.log(data);
// //     }
    
// //   }
// // }


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



app.listen(port, function(){
  console.log("express is working on " + port);
});

module.exports = app;