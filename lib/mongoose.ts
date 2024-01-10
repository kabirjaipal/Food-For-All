import config from "@/settings/config";
import mongoose from "mongoose";

let isConnected = false; // Variable to track the connection status

export const connectToDB = async () => {
  // Set strict query mode for Mongoose to prevent unknown field queries.
  mongoose.set("strictQuery", true);

  if (!config.mongoUrl) return console.log("Missing MongoDB URL");

  // If the connection isalready established, return without creating a new connection.
  if (isConnected) return;

  try {
    await mongoose.connect(config.mongoUrl).catch((e) => {});

    isConnected = true; // Set the connection status to true
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
