import mongoose from 'mongoose';

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`MongoDB Connected Successfully`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
