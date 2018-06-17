//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectId} = require ('mongodb');


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
if (err) {
  return console.log('error');
}
  console.log('connected to mongodb');
  const db = client.db('TodoApp');

  //delete meny
//db.collection('Todos').deleteMany({text: "123"}).then((results) => {
//  console.log(results);
//});
  //delete one
//  db.collection('Todos').deleteOne({text: "2222"}).then((results) => {
//    console.log(results);
  //});
   //find one and delete
   db.collection('Todos').findOneAndDelete({text: "2222"}).then((results) => {
     console.log(results);
   });

});
