import mongoose from "mongoose";

const MONGODB_URI = process.env.DATABASE_URL;
// console.log(MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Mongodb Connected Successful");
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
  }
}

export default dbConnect;
