'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  name: { type:String, required:true},
  color: { type: String},
  type: { type:String, uppercase: true, enum: ['SHIRT', 'PANTS', 'DRESS', 'JACKET', 'OTHER']}
});

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;
