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
  {
    date: '20221219',
    weekend: false,
    done_s: true,
    done_w: false,
    done_e: true,
    done_p: false,
    today: false,
  },
  {
    date: '20221220',
    weekend: false,
    done_s: true,
    done_w: true,
    done_e: true,
    done_p: false,
    today: false,
  },
  {
    date: '20221221',
    weekend: false,
    done_s: true,
    done_w: false,
    done_e: true,
    done_p: false,
    today: false,
  },
  {
    date: '20221222',
    weekend: false,
    done_s: true,
    done_w: true,
    done_e: true,
    done_p: false,
    today: false,
  },
  {
    date: '20221223',
    weekend: false,
    done_s: false,
    done_w: false,
    done_e: true,
    done_p: false,
    today: false,
  },
  {
    date: '20221224',
    weekend: true,
    done_s: true,
    done_w: true,
    done_e: true,
    done_p: true,
    today: false,
  },
  {
    date: '20221225',
    weekend: true,
    done_s: false,
    done_w: false,
    done_e: true,
    done_p: true,
    today: false,
  },
  {
    date: '20221226',
    weekend: false,
    done_s: false,
    done_w: true,
    done_e: true,
    done_p: true,
    today: false,
  },
  {
    date: '20221227',
    weekend: false,
    done_s: true,
    done_w: false,
    done_e: true,
    done_p: true,
    today: false,
  },
  {
    date: '20221228',
    weekend: false,
    done_s: false,
    done_w: true,
    done_e: false,
    done_p: false,
    today: false,
  },
  {
    date: '20221229',
    weekend: false,
    done_s: false,
    done_w: true,
    done_e: false,
    done_p: false,
    today: false,
  },
  {
    date: '20221230',
    weekend: false,
    done_s: false,
    done_w: false,
    done_e: false,
    done_p: false,
    today: true,
  },
];

const func = async () => {
  await insertManyInCollection('daily_sode', data);
};
func();

// const read = async () => console.log(await readCollection('customers1234567'));
// read();
