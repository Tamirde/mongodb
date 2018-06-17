//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectId} = require ('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
if (err) {
  return console.log('error');
}
  console.log('connected to mongodb');
  const db = client.db('TodoApp');

//enter the collection
// find = for specific condition in this case only non completed mission's
//db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  db.collection('Users').find({name: "bob"}).toArray().then((docs) => {

console.log('To do from the db');
//for specific doc just add [0]
console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('error find', err);
});
 client.close();
//db.collection('Todos').find().count().then((count) => {

//console.log('To do from the db');
//for specific doc just add [0]
//console.log(count);
//}, (err) => {
//console.log('error find', err);
//});

//  client.close();
});
