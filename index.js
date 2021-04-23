'use strict';

const server = require('./src/server.js');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(MONGODB_URI, options);

dotenv.config();

server.start(PORT);
