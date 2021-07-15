import Todo from '../../models/Todo.js';
import trycatchAsync from '../../middlewares/trycatchAsync.js';

// @description     Get all todos
// @route           GET /api/v1/todo
// @private         false
export const getTodos = trycatchAsync(async (req, res) => {
  const data = req.results;

  res.status(200).send({
    success: true,
    data,
  });
});
