var mongoose = require('mongoose');


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

module.exports = {Todo};

//test how to add new contact and user the fanction

//
// var Newtodo = new Todo({
//   text: 'tamir',
//   completed: true
// });
//
//
// Newtodo.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log('error');
// });
