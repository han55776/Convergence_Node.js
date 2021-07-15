import Todo from '../../models/Todo.js';
import trycatchAsync from '../../middlewares/trycatchAsync.js';
import ErrorResponse from '../../utils/ErrorResponse.js';

// @description     Delete a todo with specific todo id
// @route           DELETE /api/v1/todo
// @private         true
export const deleteTodo = trycatchAsync(async (req, res, next) => {
  const todoId = req.params.id;

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

  await Todo.deleteOne({ _id: todoId });

  res.status(200).send({
    success: true,
  });
});
