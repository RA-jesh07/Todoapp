import React, { useState } from 'react';

function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Add sf a new task" 
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
