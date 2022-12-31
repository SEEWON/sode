const {
  readCollection,
  createCollection,
  insertOneInCollection,
  insertManyInCollection,
  deleteOneInCollection,
  deleteManyInCollection,
  updateOneInCollection,
  updateManyInCollection,
  dropCollection,
} = require('./db');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send;
});

const func = async () => {
  await createCollection('daily_sode223');
};
func();

// const read = async () => console.log(await readCollection('customers1234567'));
// read();
