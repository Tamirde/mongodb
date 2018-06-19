var mongoose = require('mongoose');

var User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true

  }
});

module.exports = {User};

//add new user and call the funcation

//
// var newuser = new User({
//   username: "miro",
//   email: "tamir@lightico.com"
// });
//
//
// newuser.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log(e);
// });
