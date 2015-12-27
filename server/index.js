// bootstrap file, start up server and run app
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

// Create the application.
var app = express();

// express allows you to install middleware, intercept requests
// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// gives ability to use PUT and other Http methods
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
// allows public API, opened access to any server
// make sure to protect sensitive data
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//Connect to MongoDB
//Will need to create a database called mean app
mongoose.connect('mongodb://localhost/undertone');
mongoose.connection.once('open', function() {

  // Load the models.
  app.models = require('./models/index');

  // Load the routes.
  var routes = require('./routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller(app, route));
  });

  console.log('Listening on port 3000...');
   app.listen(3000); //why this port?
 });
