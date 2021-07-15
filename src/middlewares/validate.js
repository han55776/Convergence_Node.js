import { validationResult } from 'express-validator';
import ErrorResponse from '../utils/ErrorResponse.js';

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new ErrorResponse(errors.array()[0].msg, 403));
  }

  next();
};

export default validate;
