// we don't need to require the mongoose object from our mongoose.js file. The mongoose object from the mongoose module will be fine
const mongoose = require('mongoose');

// model goes here
const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

// export the model to be available in other files
module.exports = {User};
