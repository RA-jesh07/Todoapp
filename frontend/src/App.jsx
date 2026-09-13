import React, { useEffect, useState } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from './api/todoApi';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './styles/App.css';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  const handleAdd = async (title) => {
    const res = await addTodo(title);
    setTodos([...todos, res.data]);
  };

  const handleUpdate = async (id, completed) => {
    const res = await updateTodo(id, completed);
    setTodos(todos.map(todo => todo.id === id ? res.data : todo));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;
