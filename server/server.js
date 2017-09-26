// this file will be the root of our application
// when we want to start up our node app, we will run this file
// this file will get everything ready to go

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:27017/Todoapp');

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

// var newTodo = new Todo({
//   text: 'Eat food',
//   completed: true,
//   completedAt: 5
// });
//
// newTodo.save().then( (result) => {
//   console.log(result);
// }, (error) => {
//   console.log(`There was an error: ${error}`);
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var shakil = new User ({
  email: 'tanvirul_islam@outlook.com'
});

shakil.save().then( (result) => {
  console.log(`A new user with an email of "${result.email}" was set`);
}, (error) => {
  console.log(`There was an error: ${error}`);
});
