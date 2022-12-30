const express = require('express');
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

const app = express();
require('dotenv').config();

// app.listen(8080, (req, res) => {
//   console.log('Hi!');
// });

// const q = { age: /^2/ };
const q = { age: { $gt: 20 } };
const d = { $set: { name: 'Seeeean', age: 23 } };
const data = [
  { name: 'SK', age: 22 },
  { name: 'DB', age: 23 },
];

const func = async () => {
  await dropCollection('customers123456', q, d);
  await dropCollection('customers12345', q, d);
  await dropCollection('customers1234', q, d);
  await dropCollection('customers', q, d);
  await dropCollection('customers2', q, d);
};
func();

// const read = async () => console.log(await readCollection('customers1234567'));
// read();
