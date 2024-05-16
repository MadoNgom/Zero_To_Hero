import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGO_DB_URI || "";

mongoose.connect(MONGODB_URI)
.then(() => console.log("Connexion à la base Mongo réussie"))
.catch((error) => console.error("Connexion à la base Mongo échouée", error));

