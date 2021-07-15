import express from 'express';
import validate from '../middlewares/validate.js';
import query from '../middlewares/query.js';
import privateAccess from '../middlewares/privateAccess.js';
import Todo from '../models/Todo.js';
import { body } from 'express-validator';
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from '../controllers/todo/index.js';

const router = express.Router();

router
  .route('/')
  .get(query(Todo), getTodos)
  .post(
    privateAccess,
    [
      body('category')
        .trim()
        .notEmpty()
        .withMessage('Category must be provided'),
      body('description')
        .trim()
        .notEmpty()
        .withMessage('Description must be provided'),
    ],
    validate,
    createTodo
  );

router
  .route('/:id')
  .delete(privateAccess, deleteTodo)
  .put(
    privateAccess,
    [
      body('category')
        .trim()
        .notEmpty()
        .withMessage('Category must be provided'),
      body('description')
        .trim()
        .notEmpty()
        .withMessage('Description must be provided'),
    ],
    validate,
    updateTodo
  );

export default router;
