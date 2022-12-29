const express = require('express');

const app = express();
require('dotenv').config();

app.listen(8080, (req, res) => {
  console.log('Hi!');
});
