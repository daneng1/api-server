'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const logger = require('./middleware/logger.js');
const clothes = require('./routes/clothes');
const food = require('./routes/food');
const todo = require('./routes/todo');
const product = require('./routes/product');
const category = require('./routes/category');

const notFound = require('./error-handlers/404.js');
const error = require('./error-handlers/500.js');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(logger);
app.use(food);
app.use(clothes);
app.use(todo);
app.use(product);
app.use(category);

app.use('/*', notFound);
app.use(error);

module.exports = {
  server:app,
  start: port => {
    app.listen(port, () => {
      console.log(`up on port ${port}`);
    });
  }
};
