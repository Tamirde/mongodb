var express = require('express');
var bodyparser = require('body-parser');
var  ObjectID = require('mongodb').ObjectID;

const port = process.env.PORT || 3000;

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/User');

var app = express();
app.use(bodyparser.json());
//add new to do via api and add it to the mondo doc
app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });


  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//add user via api request
app.post('/todos/adduser', (req, res) => {
  console.log(req.body);
  var user = new User({
    email: req.body.email,
    username: req.body.username
  });


  user.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

//get all user via api request
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
   res.send(e);
 });
})

//get all users
app.get('/users', (req, res) => {
  User.find().then((todos) => {
    res.send({users});
  }, (e) => {
   res.send(e);
 });
})


//get username and print response all his info

app.get('/users/:id', (req, res) => {
var id = req.params.id;
 if (!ObjectID.isValid(id)) {
 return  res.status(404).send();
 }
User.findById(id).then((user) => {
  res.send({user});
}).catch((e) => {
  res.status(400).send();
})
});



app.listen(port, () => {
  console.log(port);
});

module.exports = {app};
