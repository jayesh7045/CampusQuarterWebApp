import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
export const ConnectDB = () => {
    mongoose.connect(process.env.MONGODB_URL)
}