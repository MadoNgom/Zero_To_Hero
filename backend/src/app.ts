import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { UtilisateurRoute } from './routes/UtilisateurRoute';
import connectMongoDB from './config/mongodb.config';
import courseRoutes from './routes/course.route';
import moduleRoutes from './routes/module.route';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
connectMongoDB();

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/modules', moduleRoutes);

const utilisateurRoute = new UtilisateurRoute();
app.use("/api/auth", utilisateurRoute.getRouter());

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello from Express server!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;

