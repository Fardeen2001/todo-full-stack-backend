import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DbConnection = () => {
  const url = process.env.MONGO_URI;
  mongoose.connect(url);
  mongoose.connection.on("connected", () => {
    console.log("db connected");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("db disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("error while connecting db and got disconnected");
  });
};
export default DbConnection;
