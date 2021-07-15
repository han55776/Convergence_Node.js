import ErrorResponse from '../utils/ErrorResponse.js';
import jwt from 'jsonwebtoken';

// privateAccess is a middleware that asks an user to provide token
// when it comes to "deleting" or "updating"
const privateAccess = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
  }

  // make sure token exists
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.userId = decoded.id;

  next();
};

export default privateAccess;
