import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { UtilisateurRoute } from './routes/UtilisateurRoute';
import './config/mongodb.config';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use(bodyParser.json());

const utilisateurRoute = new UtilisateurRoute();
app.use("/api/auth", utilisateurRoute.getRouter());

app.listen(PORT, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});