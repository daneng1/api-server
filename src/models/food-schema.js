'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: { type:String, required:true},
  calories: { type: Number},
  type: {type:String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'GRAIN', 'MEAT', 'DAIRY', 'OTHER']}
});

const foodModel = mongoose.model('food', foodSchema);

module.exports = foodModel;
