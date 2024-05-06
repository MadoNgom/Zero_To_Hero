import express from 'express';
import { Database } from './database';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { UtilisateurRoute } from './routes/UtilisateurRoute';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use(bodyParser.json());

const utilisateurRoute = new UtilisateurRoute();
app.use("/api/utilisateur", utilisateurRoute.getRouter());

app.get('/', (req, res) => {
    res.send("Zero_to_Hero API");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
});

const database = new Database();
database.connect();
database.createUserTable();