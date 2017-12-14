var express 	= require('express');
var logger  	= require('morgan');
var bodyParser 	= require('body-parser');
var user 		= require('./app/routes/user');
var connection 	= require('./config/db')

var app = express();

connection.init();
user.configure(app);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
module.exports = app;