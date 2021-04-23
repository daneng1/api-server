'use strict';

const express = require('express');
const Clothes = require('../models/clothes-schema.js');
const GenericCollection = require('../models/data-collection-class.js');
const clothes = new GenericCollection(Clothes);

const router = express.Router();

router.get('/clothes', getClothes);
router.get('/clothes/:id', getOneClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

async function getClothes(req, res) {
  let getAllClothes = await clothes.read();
  res.status(200).json(getAllClothes);
}

async function getOneClothes(req, res) {
  const id = parseInt(req.params.id);
  let theClothes = await clothes.read(id);
  res.status(200).json(theClothes);
}

async function createClothes(req,res) {
  let content = req.body;
  let createdClothes = await clothes.create(content);
  res.status(201).json(createdClothes);
}

async function updateClothes(req, res) {
  const id = req.params.id;
  let content = req.body;
  let theClothes = await clothes.update(id, content);
  res.status(200).json(theClothes);
}

async function deleteClothes (req, res) {
  const id = req.params.id;
  let deletedClothes = await clothes.delete(id);
  res.status(200).json({deletedClothes});
}

module.exports = router;
