var express = require('express');
var app = express();
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8000;
var environment = app.get('env');

app.listen(port, function(){
  console.log("express is working on " + port);
});