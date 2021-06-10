'use strict';

const express = require('express');
const Category = require('../models/category-schema.js');
const GenericCollection = require('../models/data-collection-class.js');
const category = new GenericCollection(Category);


const router = express.Router();

router.get('/category', getCategory);
router.get('/category/:id', getOneCategory);
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

async function getCategory(req, res) {
  let getAllCategory = await category.read();
  console.log('inside getCategory', getAllCategory);
  res.status(200).json(getAllCategory);
}

async function getOneCategory(req, res) {
  const id = req.params.id;
  let theCategory = await category.read(id);
  res.status(200).json(theCategory);
}

async function createCategory(req,res) {
  console.log(req.body);
  let content = req.body;
  let createdCategory = await category.create(content);
  res.status(201).json(createdCategory);
}

async function updateCategory(req, res) {
  const id = req.params.id;
  let content = req.body;
  let theCategory = await category.update(id, content);
  res.status(200).json(theCategory);
}

async function deleteCategory (req, res) {
  const id = req.params.id;
  let deletedCategory = await category.delete(id);
  res.status(200).json({deletedCategory});
}

module.exports = router;
