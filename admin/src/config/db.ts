import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
     process.env.MONGO_URI! 
    );
    console.log(`Products-db connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.log("kl");
    console.log(error.message);
    process.exit(1);
  }
};

export { connectDB };
