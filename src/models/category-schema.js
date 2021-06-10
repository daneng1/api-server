'use strict';

const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: { type:String, required:true, enum: ['patio', 'kitchen', 'games']},
  description: { type: String, required:true},
});

const categoryModel = mongoose.model('category', categorySchema);

module.exports = categoryModel;
