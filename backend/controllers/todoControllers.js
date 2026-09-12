import { getAllTodos, insertTodo, modifyTodo, removeTodo } from '../models/todomodels.js';

export const getTodos = async (req, res) => {
  const todos = await getAllTodos();
  res.json(todos);
};

export const addTodo = async (req, res) => {
  const { title } = req.body;
  const newTodo = await insertTodo(title);
  res.json(newTodo);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const updated = await modifyTodo(id, completed);
  res.json(updated);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deleted = await removeTodo(id);
  res.json(deleted);
};
