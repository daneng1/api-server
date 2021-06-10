'use strict';

const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: { type:String, required:true},
  description: { type: String, required:true},
  displayName: {type:String, required:true},
  active: {type:Boolean, required:true},
});

const categoryModel = mongoose.model('category', categorySchema);

module.exports = categoryModel;
