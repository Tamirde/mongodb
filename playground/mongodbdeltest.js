//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectId} = require ('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
if (err) {
  return console.log('error');
}
  console.log('connected to mongodb');
  const db = client.db('TodoApp');

  db.collection('Users').find().toArray().then((docs) => {

//for specific doc just add [0]
console.log(JSON.stringify(docs, undefined, 2));
var tamir = docs[0]._id;
db.collection('Todos').deleteMany({_id: tamir}).then((results) => {
 console.log(results);
});

}, (err) => {
  console.log('error find', err);
});


//});
});
