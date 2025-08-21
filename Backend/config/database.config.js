import mongoose from "mongoose";
import { config } from "./app.config.js";

const connectDatabase = async() => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("Connected to Mongo database");
    } catch (error) {
        console.log(error, "Error connecting to Mongo Database");
        process.exit(1);
    }
};

export default connectDatabase;
