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
readCollection('customers');
// insertManyInCollection('customers', data);
// updateManyInCollection('customers', q, d);
