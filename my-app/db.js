const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'todos.json');

function readDB() {
    if (!fs.existsSync(dbPath)) {
        fs.writeFileSync(dbPath, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

function writeDB(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

async function getTodos() {
    return readDB();
}

async function addTodo(text, completed = false) {
    const todos = readDB();
    const newTodo = { id: Date.now().toString(), text, completed };
    todos.push(newTodo);
    writeDB(todos);
    return newTodo;
}

async function updateTodo(id, completed) {
    const todos = readDB();
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index].completed = completed;
        writeDB(todos);
    }
}

async function deleteTodo(id) {
    const todos = readDB();
    const updatedTodos = todos.filter(todo => todo.id !== id);
    writeDB(updatedTodos);
}

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
