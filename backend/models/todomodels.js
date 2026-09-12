import pool from '../db/index.js';

export const getAllTodos = async () => {
  const result = await pool.query('SELECT * FROM todos ORDER BY id ASC');
  return result.rows;
};

export const insertTodo = async (title) => {
  const result = await pool.query('INSERT INTO todos (title, completed) VALUES ($1, false) RETURNING *', [title]);
  return result.rows[0];
};

export const modifyTodo = async (id, completed) => {
  const result = await pool.query('UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *', [completed, id]);
  return result.rows[0];
};

export const removeTodo = async (id) => {
  const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};
