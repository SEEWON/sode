const express = require('express');

const app = express();
require('dotenv').config();

app.listen(8080, (req, res) => {
  console.log('Hi!');
});

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DBURI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err, db) => {
  // perform actions on the collection object
  const dbo = db.db('mydb');
  dbo.createCollection('customers2', function (err, res) {
    if (err) throw err;
    console.log('Collection created!');
    db.close();
  });
});
