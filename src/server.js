const {
  getRecent10,
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

app.get('/', async (req, res) => {
  const data = await getRecent10('daily_sode');
  res.json(data);
});

app.listen(8080, () => {
  console.log(`listening on port ${8080}`);
});

const func = async () => {
  await getRecent10('daily_sode');
};
func();

// const read = async () => console.log(await readCollection('customers1234567'));
// read();
