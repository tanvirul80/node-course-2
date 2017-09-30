const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findByIdAndRemove('59cfaff294e7afa1874533eb').then((todo) => {
//   console.log(`The following document was removed: ${todo}`);
// });

Todo.findOneAndRemove({ _id: '59cfb12f2b67fe6e88ef680f' }).then((todo) => {
  console.log(`The following document was removed: ${todo}`);
});
