import User from '../../models/User.js';
import trycatchAsync from '../../middlewares/trycatchAsync.js';
import ErrorResponse from '../../utils/ErrorResponse.js';

// @description     Sign up user
// @route           POST /api/v1/auth/register
// @private         false
export const register = trycatchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const isUserAlreadyRegistered = await User.findOne({ email });

  // make sure an email is unique
  if (isUserAlreadyRegistered) {
    return next(new ErrorResponse('Already Registered', 403));
  }

  // Create user with email and password
  const user = await User.create({
    email,
    password,
  });

  res.status(201).send({
    success: true,
    data: {
      token: user.getJwtToken(),
    },
  });
});
