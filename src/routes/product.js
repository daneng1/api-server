'use strict';

const express = require('express');
const Product = require('../models/product-schema.js');
const GenericCollection = require('../models/data-collection-class.js');
const product = new GenericCollection(Product);


const router = express.Router();

router.get('/product', getProduct);
router.get('/product/:id', getOneProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

async function getProduct(req, res) {
  let getAllProduct = await product.read();
  console.log('inside getProduct', getAllProduct);
  res.status(200).json(getAllProduct);
}

async function getOneProduct(req, res) {
  const id = req.params.id;
  let theProduct = await product.read(id);
  res.status(200).json(theProduct);
}

async function createProduct(req,res) {
  console.log(req.body);
  let content = req.body;
  let createdProduct = await product.create(content);
  res.status(201).json(createdProduct);
}

async function updateProduct(req, res) {
  const id = req.params.id;
  let content = req.body;
  let theProduct = await product.update(id, content);
  res.status(200).json(theProduct);
}

async function deleteProduct (req, res) {
  const id = req.params.id;
  let deletedProduct = await product.delete(id);
  res.status(200).json({deletedProduct});
}

module.exports = router;
