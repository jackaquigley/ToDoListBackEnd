const express = require('express');
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

const app = express();

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('todo_db');
  const todoCollection = db.collection('todo');
  const todoRouter = createRouter(todoCollection)
  app.use('/api/todo', todoRouter);

})

app.use(parser.json());
app.use(cors())

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
})
