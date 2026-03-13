import mongoose from "mongoose";

const mongodb_URL = process.env.MONGODB_URL;

if (!mongodb_URL) {
  throw new Error("MONGODB_URL is not defined");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongodb_URL)
      .then((conn) => conn.connection);
  }
  try {
    const conn = await cached.promise;
    return conn;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
