import mongoose from 'mongoose';

// Connect with MongoDB
const connectMongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connect Successful`.bgBlue);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectMongoDB;
