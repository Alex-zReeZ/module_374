const express = require('express');
const bodyParser = require('body-parser');
const { getTodos, addTodo, updateTodo, deleteTodo } = require('./db');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/todos', async (req, res) => {
    const todos = await getTodos();
    res.json(todos);
});

app.post('/api/todos', async (req, res) => {
    const { text, completed } = req.body;
    const newTodo = await addTodo(text, completed);
    res.status(201).json(newTodo);
});

app.patch('/api/todos/:id', async (req, res) => {
    const { completed } = req.body;
    await updateTodo(req.params.id, completed);
    res.sendStatus(204);
});

app.delete('/api/todos/:id', async (req, res) => {
    await deleteTodo(req.params.id);
    res.sendStatus(204);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));