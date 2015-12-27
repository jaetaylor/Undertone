var restful = require('node-restful');

module.exports = function(app, route) {

// Setup the controller for REST
  var rest = restful.model(
    'task',
    app.models.task
  ).methods(['get', 'put', 'post', 'delete']);

  // register this endpoint with the application
  rest.register(app, route);

  // return middleware
  return function(req, res, next) {
    next();
  };

  /* // Setup the controller for REST;
  Resource(app, '', route, app.models.movie).rest();

  // Return middleware.
  return function(req, res, next) {
    next();
  };*/
};
