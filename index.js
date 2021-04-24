'use strict';

const server = require('./src/server.js');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(process.env.MONGODB_URI, options);

server.start(PORT);
