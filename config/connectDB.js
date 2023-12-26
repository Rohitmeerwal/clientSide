import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "JWT",
    };

    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

export default connectDB;
