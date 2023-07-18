import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connect mongo ok!!!');
  } catch (err) {
    console.log(err);
    throw new Error('Connection failed');
  }
};

export { connectToDB };
