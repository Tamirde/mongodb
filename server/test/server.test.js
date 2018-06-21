const expect = require('expect');
const supertest = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');


describe('post/todos', () => {
  it('should create new todo', (done) => {
  var text = 'supertest';

  request(app)
  .post('./todos')
  .send({text})
  .expect(200)
  .expect((res) => {
    expecto(res.body.text).toBe(text);
  })
  .end((err, res) => {
    if(err) {
    return done(err);
    }
    Todo.find().then((todos) => {
      expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
    }).catch((e) => done(e));
  });

  });
});
