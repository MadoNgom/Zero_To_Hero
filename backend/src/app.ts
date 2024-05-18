import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectMongoDB from './config/mongodb.config';
import courseRoutes from './routes/course.route';
import moduleRoutes from './routes/module.route';
import userRoutes from './routes/user.route';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB
connectMongoDB();

// Routes
app.use(`/${process.env.API_PREFIX}/courses`, courseRoutes);
app.use(`/${process.env.API_PREFIX}/modules`, moduleRoutes);
app.use(`/${process.env.API_PREFIX}/users`, userRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello from Express server!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;

