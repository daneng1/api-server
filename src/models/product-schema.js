'use strict';

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  category: {type: String, require:true, enum: ['patio', 'kitchen', 'games']},
  name: { type:String, required:true},
  price: { type: String, required:true},
  image: {type: String, required:true},
  inventory: { type:Number, required: true},
});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;
