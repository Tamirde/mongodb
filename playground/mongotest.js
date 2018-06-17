//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectId} = require ('mongodb');

//var Obj = new ObjectId();
//console.log(Obj);

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
if (err) {
  return console.log('error');
}
  console.log('connected to mongodb');
const db = client.db('TodoApp');

  db.collection('Users').insertOne({
    name: 'tamir',
    age: 31,
location: 'israel'
  }, (err, result) => {
    if (err) {
    return  console.log('error inserting', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  client.close();
});
