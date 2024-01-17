import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mermdb");
    console.log('>>>Data Base Connect')
  } catch (error) {
    console.log(error)
  }
};
