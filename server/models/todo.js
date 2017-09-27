// we don't need to require the mongoose object from our mongoose.js file. The mongoose object from the mongoose module will be fine
var mongoose = require('mongoose');

// model goes here
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }

});

// export the model to be available in other files
module.exports = {Todo};
