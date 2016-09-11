var express = require('express');
var app = express();

var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8000;
var environment = app.get('env');

var databaseUri = require('./config/db')(environment);

mongoose.connect(databaseUri);


if('test' !== environment) {
  app.use(require('morgan')('dev'));
}

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, function(){
  console.log("express is working on " + port);
});

module.exports = app;