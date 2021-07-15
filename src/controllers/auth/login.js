import User from '../../models/User.js';
import trycatchAsync from '../../middlewares/trycatchAsync.js';
import ErrorResponse from '../../utils/ErrorResponse.js';

// @description     Sign in user
// @route           POST /api/v1/auth/login
// @private         false
export const login = trycatchAsync(async (req, res) => {
  const { email, password } = req.body;

  // make sure email and password are provided from body
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 404));
  }

  const user = await User.findOne({ email });

  // if an user with email is not registered
  if (!user) {
    return next(new ErrorResponse('Not Registered', 404));
  }

  const isMatch = await user.matchPassword(password);

  // if the provided password is not matched with the user's password
  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 403));
  }

  res.status(200).send({
    success: true,
    data: {
      token: user.getJwtToken(),
    },
  });
});
