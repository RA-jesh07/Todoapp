import React from 'react';

function TodoItem({ todo, onUpdate, onDelete }) {
  return (
    <li>
      <span 
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => onUpdate(todo.id, !todo.completed)}
      >
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
