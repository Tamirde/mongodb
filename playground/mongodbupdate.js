//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectId} = require ('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
if (err) {
  return console.log('error');
}
  console.log('connected to mongodb');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectId('5b263192596565a442a9ffa7')
  }, {
      completed: false
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });



//});
});
