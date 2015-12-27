// models are supposed to be simple, defining schemas for db
// gives interface into MongoDB, provide models that map to the db
var mongoose = require('mongoose');

// define properties for the object
// Create the MovieSchema.
var TaskSchema = new mongoose.Schema({
  study: {
  type: String,
  required: true
},
  status: {
  type: String,
  required: true
}
});

// must always assign requires to module.exports
// Export the model.
module.exports = mongoose.model('task', TaskSchema);
