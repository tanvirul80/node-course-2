//const MongoClient = require('mongodb').MongoClient;
//The code below will do the same as the one above but using ES6 object destructuring
//Using the comma within the {} allows us to grab more methods from require('mongodb')
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if (err) {
    // By using a return statement it prevents the rest of the function from executing
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndDelete({completed: true}).then( (result) => {
    console.log(result.value);
  }, (error) => {
    console.log(`There was an error: ${error}`);
  });


  //db.close();

});
