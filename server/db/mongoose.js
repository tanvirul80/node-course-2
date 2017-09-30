// grab the mongoose model
const mongoose = require('mongoose');

// set mongoose to use ES6 Promises
mongoose.Promise = global.Promise;

// create a db object to store the locations of the localhost database and the mlab database
let db = {
  localhost: 'mongodb://localhost:27017/Todoapp',
  mlab: 'mongodb://tanvirul:d9625WGW@ds159024.mlab.com:59024/learning-node'
};

// connect mongoose to the database
mongoose.connect(db.localhost || db.mlab);

// export the mongoose object to use in other files. the code is a shortcut way of writing: module.export.mongoose = mongoose
module.export = {mongoose};

// require the model from the model files using ES6 destructuring
const {Todo} = require('../models/todo');
const {User} = require('../models/user');
