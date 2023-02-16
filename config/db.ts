import mongoose from "mongoose";

const DB_URL = "mongodb://localhost/simpleEcommerce";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(DB_URL);
    console.log(`DB is connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
