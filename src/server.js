import app from './app.js';
import connectDB from './utils/database.js';

import dotenv from 'dotenv';

// Development Environment
if (process.env.NODE_ENV === 'DEVELOPMENT') {
  dotenv.config();
}

// Connect with Databse
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
