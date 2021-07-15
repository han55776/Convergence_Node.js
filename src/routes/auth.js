import express from 'express';
import validate from '../middlewares/validate.js';
import { body } from 'express-validator';
import { login, register } from '../controllers/auth/index.js';

const router = express.Router();

router
  .route('/login')
  .post(
    [
      body('email').trim().isEmail().withMessage('Email must be valid'),
      body('password')
        .trim()
        .notEmpty()
        .withMessage('Password must be provided for registration'),
    ],
    validate,
    login
  );

router
  .route('/register')
  .post(
    [
      body('email').trim().isEmail().withMessage('Email must be valid'),
      body('password')
        .trim()
        .notEmpty()
        .withMessage('Password must be provided for validation'),
    ],
    validate,
    register
  );

export default router;
