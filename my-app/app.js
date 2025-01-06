const express = require('express');
const bodyParser = require('body-parser');
const { getTodos, addTodo, updateTodo, deleteTodo } = require('./db');

const router = express.Router();

router.use(bodyParser.json());

// Routes API
router.get('/todos', async (req, res) => {
    const todos = await getTodos();
    res.json(todos);
});

router.post('/todos', async (req, res) => {
    const { text, completed } = req.body;
    const newTodo = await addTodo(text, completed);
    res.status(201).json(newTodo);
});

router.patch('/todos/:id', async (req, res) => {
    const { completed } = req.body;
    await updateTodo(req.params.id, completed);
    res.sendStatus(204);
});

router.delete('/todos/:id', async (req, res) => {
    await deleteTodo(req.params.id);
    res.sendStatus(204);
});

module.exports = router;
