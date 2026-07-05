import express from 'express';
import cors from 'cors';
import analysisRoutes from './routes/analysis.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'AI Code Reviewer API is running.' });
});

app.use('/review', analysisRoutes);

export default app;