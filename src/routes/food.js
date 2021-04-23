'use strict';

const express = require('express');
const Food = require('../models/food-schema.js');
const GenericCollection = require('../models/data-collection-class.js');
const food = new GenericCollection(Food);


const router = express.Router();

router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getFood(req, res) {
  let getAllFood = await food.read();
  console.log(getAllFood);
  res.status(200).json(getAllFood);
}

async function getOneFood(req, res) {
  const id = req.params.id;
  let theFood = await food.read(id);
  res.status(200).json(theFood);
}

async function createFood(req,res) {
  let content = req.body;
  let createdFood = await food.create(content);
  res.status(201).json(createdFood);
}

async function updateFood(req, res) {
  const id = req.params.id;
  let content = req.body;
  let theFood = await food.update(id, content);
  res.status(200).json(theFood);
}

async function deleteFood (req, res) {
  const id = req.params.id;
  let deletedFood = await food.delete(id);
  res.status(200).json({deletedFood});
}

module.exports = router;
