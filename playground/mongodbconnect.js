const MongoClient = require ('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, client) => {
if (err) {
  return console.log('error');
}
  console.log('connected to mongodb');
const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'tamir',
    completed: false

  }, (err, result) => {
    if (err) {
    return  console.log('error inserting', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  client.close();
});
