// grab the mongoose model
const mongoose = require('mongoose');

// set mongoose to use ES6 Promises
mongoose.Promise = global.Promise;

// connect mongoose to the database
// if process.env.PORT exists then use db.mlab otherwise use db.localhost
mongoose.connect(db);

// export the mongoose object to use in other files. the code is a shortcut way of writing: module.export.mongoose = mongoose
module.export = {mongoose};

// require the model from the model files using ES6 destructuring
const {Todo} = require('../models/todo');
const {User} = require('../models/user');
