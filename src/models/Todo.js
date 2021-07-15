import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    writer: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
