async function fetchTodos() {
    const response = await fetch('/api/todos');
    const todos = await response.json();
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    todos.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });
}

function createTodoElement(todo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = todo.text;
    span.className = 'todo-text';
    if (todo.completed) {
        span.classList.add('checked');
    }
    span.onclick = async function () {
        await fetch(`/api/todos/${todo.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !todo.completed })
        });
        fetchTodos();
    };

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = async function () {
        await fetch(`/api/todos/${todo.id}`, { method: 'DELETE' });
        fetchTodos();
    };

    li.appendChild(span);
    li.appendChild(removeBtn);
    return li;
}

async function addTodo() {
    const input = document.getElementById('todoInput');
    const todoText = input.value.trim();

    if (todoText === '') {
        alert('Please enter a task!');
        return;
    }

    await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: todoText, completed: false })
    });

    input.value = '';
    fetchTodos();
}

document.addEventListener('DOMContentLoaded', fetchTodos);