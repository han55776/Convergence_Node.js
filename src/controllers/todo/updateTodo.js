import Todo from '../../models/Todo.js';
import trycatchAsync from '../../middlewares/trycatchAsync.js';
import ErrorResponse from '../../utils/ErrorResponse.js';

// @description     Update a todo with two body contents; category and description
// @route           PUT /api/v1/todo/:id
// @private         true
export const updateTodo = trycatchAsync(async (req, res, next) => {
  const { category, description } = req.body;
  const todoId = req.params.id;

  // make sure that id param is provided in URL
  if (!todoId) {
    return next(new ErrorResponse('Id is not valid', 404));
  }
  const todo = await Todo.findOne({ _id: todoId });

  // if valid todo id is not given
  if (!todo) {
    return next(new ErrorResponse('Todo was not found', 404));
  }

  // make sure that the original todo writer is equal to token provider
  if (todo.writer !== req.userId) {
    return next(
      new ErrorResponse('You are not authorized to update todo', 401)
    );
  }

  todo.set({
    category,
    description,
  });

  await todo.save();

  res.status(200).send({
    success: true,
    data: {
      todo,
    },
  });
});
