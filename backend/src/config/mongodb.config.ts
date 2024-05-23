import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectMongoDB = async () => {
    const MONGODB_URI = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/yourDatabaseName';

    try {
        mongoose.connect(MONGODB_URI);
        console.log("MongoDB connected successfully.");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectMongoDB;