'use strict';

const express = require('express');
const Todo = require('../models/todo-schema.js');
const GenericCollection = require('../models/data-collection-class.js');
const todo = new GenericCollection(Todo);


const router = express.Router();

router.get('/todo', getTodo);
router.get('/todo/:id', getOneTodo);
router.post('/todo', createTodo);
router.put('/todo/:id', updateTodo);
router.delete('/todo/:id', deleteTodo);

async function getTodo(req, res) {
  let getAllTodo = await todo.read();
  console.log('inside getTodo', getAllTodo);
  res.status(200).json(getAllTodo);
}

async function getOneTodo(req, res) {
  const id = req.params.id;
  let theTodo = await todo.read(id);
  res.status(200).json(theTodo);
}

async function createTodo(req,res) {
  console.log(req.body);
  let content = req.body;
  let createdTodo = await todo.create(content);
  res.status(201).json(createdTodo);
}

async function updateTodo(req, res) {
  const id = req.params.id;
  let content = req.body;
  let theTodo = await todo.update(id, content);
  res.status(200).json(theTodo);
}

async function deleteTodo (req, res) {
  const id = req.params.id;
  let deletedTodo = await todo.delete(id);
  res.status(200).json({deletedTodo});
}

module.exports = router;
