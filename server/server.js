// this file will be the root of our application
// when we want to start up our node app, we will run this file
// this file will get everything ready to go

const express = require('express');
const bodyParser = require('body-parser');

// this will grab the mongoose object from the mongoose.js file and set it to a constiable in this server.js file. It uses ES6 object destructuring and so is the same as writting const mongoose = require('./db/mongoose').mongoose
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

  // Creating a new Todo and passing in the req.body.text property from our Postman request
  const todo = new Todo({
    text: req.body.text
  });

  // Saving our new Todo to the database using the save() method. The save() method returns a Promise which when resolved return the saved document.
  todo.save().then((document) => {
    res.send(document);
  }, (error) => {
    console.log(`There was an error saving the document to the database: ${error}`);
    //set a HTTP status to respond with. We will use 400 to report a bad request and then send the error message
    res.status(400).send(`There was an error: ${error}`);


  });


});

app.get('/todos', (req,res) => {

  Todo.find().then( (documents) => {
    res.send({documents}) //we are sending the documents back wrapped in an object as this will allow us to send further information with our documents later on in the future should we want to
  }, (error) => {
    res.status(400).send(`There was an error: ${error}`)
  });

});




app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = {app}; // same as writing module.exports.app = app;
