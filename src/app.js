import express from 'express';
import userRouter from './routes/auth.js';
import todoRouter from './routes/todo.js';
import errorHandler from './middlewares/error.js';
import ErrorResponse from './utils/ErrorResponse.js';

const app = express();

// Generate Body Request
app.use(express.json());

app.use('/api/v1/auth', userRouter);
app.use('/api/v1/todo', todoRouter);

// Handles all undefined URL
app.all('*', (req, res, next) => {
  next(new ErrorResponse(`Cannot access to ${req.originalUrl}`, 404));
});

app.use(errorHandler);

export default app;
