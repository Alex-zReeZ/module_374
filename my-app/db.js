const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'example',
    database: 'todo_db'
};

async function getTodos() {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM todos');
    await connection.end();
    return rows;
}

async function addTodo(text, completed) {
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute('INSERT INTO todos (text, completed) VALUES (?, ?)', [text, completed]);
    await connection.end();
    return { id: result.insertId, text, completed };
}

async function updateTodo(id, completed) {
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute('UPDATE todos SET completed = ? WHERE id = ?', [completed, id]);
    await connection.end();
}

async function deleteTodo(id) {
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute('DELETE FROM todos WHERE id = ?', [id]);
    await connection.end();
}

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
