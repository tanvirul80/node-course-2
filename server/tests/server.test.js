const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');
const { ObjectID } = require('mongodb');

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
}, {
    _id: new ObjectID(),
  text: 'Second test todo'
}];

beforeEach((done) => {

  Todo.remove({}).then( () => {

    return Todo.insertMany(todos)

  }).then( () => done());

});

describe('POST /todos', () => {

  it('should create a new todo', (done) => {

    var text = 'Test todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect(
      (res) => {
        expect(res.body.text).toBe(text);
      })
    .end( (err, res) => {

        if (err) {
          return done(err);
        }

        Todo.find({text}).then( documents => {

          expect(documents.length).toBe(1);
          expect(documents[0].text).toBe(text);
          done()

        }).catch((e) => done(e));

      });

    });

    it('should not create todo with invalid body data', (done) => {

      request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {

        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done()
        }).catch((e) => done(e));

      });


    });

  });




describe('GET /todos', () => {
  beforeEach((done) => {
    Todo.remove({}).then( () => {
      return Todo.insertMany(todos)
    }).then( () => done());
  });
  it('should get all todos', (done) => {
    request(app)
    .get('/todos')
    .expect(200)
    .expect( (res) => {
      expect(res.body.todos.length).toBe(2);
    })
    .end(done);

  });

});



describe('GET /todos/:id', () => { // Describe block to group our tests for the GET /tdods/:id tests

  it('should return todo doc', (done) => { // We must use the done argument as we are carrying out asynchronous functions

    request(app) // request using the supertest method
      .get(`/todos/${todos[0]._id.toHexString()}`) //pass in the todos using template literal. We must also use the .toHexString function to convert the id object into a string
      .expect(200) // we would expect a 200 status code
      .expect( (res) => { // using a custom assertion. Supertest passess the response to our function
        expect(res.body.todo.text).toBe(todos[0].text) // this expect call is from the expect library
      })
      .end(done);

  });

  it('should return 404 if todo not found', (done) => {

    const testId = new ObjectID('69cd9a5992a37d976e1f0419'); // this is a valid id but it is not belong to any document

    request(app)
      .get(`/todos/${testId.toHexString}`)
      .expect(404)
      .end(done);

  });

  it('should return 404 for non-object ids', (done) => {

    const testId = '69cd9a5992a37d976e1f0419'; // this is a valid id but it is not belong to any document

    request(app)
      .get(`/todos/${testId}`)
      .expect(404)
      .end(done);

  });

});
