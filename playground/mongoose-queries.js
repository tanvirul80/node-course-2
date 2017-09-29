const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

ObjectID.isValid(id);

var id = '59ca84cb19f339ae2882d362';

// Todo.find({
//   _id: id
// }).then( (todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then( (todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then( (todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch( (error) => {
//   console.log(error);
// });

User.findById(id).then( (user) => {
  if(!user){
    return console.log('No user with that id found');
  }
  console.log(`The following user was found: ${user}`);
}).catch( (error) => {
  console.log(`There was an error: ${error}`);
})
