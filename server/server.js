import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { corsOptions } from './config/cors.js';

import connectDb from './config/db.js';

import authRouter from './routers/auth.js';
import usersRouter from './routers/users.js';

dotenv.config();
const PORT = process.env.PORT;

// Initial express app
const app = express();

// Global middlewares
app.use(express.json());
app.use(cors(corsOptions));
connectDb();

// Routers
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

// App running
app.listen(PORT, () => {
    console.log(`App is running in port: ${PORT}`);
});
