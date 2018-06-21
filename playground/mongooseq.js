const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

var id = '5b28ec35bcef775874d60b4d';
var id2 = '5b28ec35bcef775874d60b4e';
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('id not found');
  }
  console.log(todo);
}).catch((e) => console.log(e));

//user find by id
User.findById(id2).then((user) => {
  if(!user) {
    return console.log('user id not found');
  }
  console.log(user);
}).catch((e) => console.log(e));
