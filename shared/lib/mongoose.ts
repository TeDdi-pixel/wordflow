import mongoose from "mongoose";

const createDbConnection = async () => {
  if (mongoose.connection.readyState === 0) {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }
    await mongoose.connect(process.env.MONGO_URI);
  }
};

export default createDbConnection;
