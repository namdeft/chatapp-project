import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import chats from './data/data.js';
import connectDb from './config/db.js';

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(cors());

connectDb();

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
};

app.get('/api/chats', cors(corsOptions), (req, res) => {
    res.status(200).json(chats);
});

app.listen(PORT, () => {
    console.log(`App is running in port: ${PORT}`);
});
