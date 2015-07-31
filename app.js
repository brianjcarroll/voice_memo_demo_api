//declare packages 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var apiRouter = require('./routes/api');
var mongoose = require('mongoose');

mongoose.connect('mongodb://<user>:<pass>@apollo.modulusmongo.net:27017/q5etIdyg');

// morgan logs all requests to the server console
app.use(morgan('combined'));

// body-parser adds a body obj to the request so use its data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', apiRouter);

app.listen(8080);
