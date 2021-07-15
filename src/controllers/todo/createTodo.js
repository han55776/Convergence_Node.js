import Todo from '../../models/Todo.js';
import trycatchAsync from '../../middlewares/trycatchAsync.js';

// @description     Create a todo with two body contents; category and description
// @route           POST /api/v1/todo
// @private         false
export const createTodo = trycatchAsync(async (req, res) => {
  const { category, description } = req.body;

  const todo = await Todo.create({
    writer: req.userId,
    category,
    description,
  });

  res.status(201).send({
    success: true,
    data: {
      todo,
    },
  });
});
