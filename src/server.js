const express = require('express');
const {
  readCollection,
  readCollection2,
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

//비동기 처리 전
const res2 = readCollection2('customers');
console.log(res2); //undefined

//비동기 처리 후
const func = async () => console.log(await readCollection('customers'));
func(); // 기다렸다가 결과 출력
