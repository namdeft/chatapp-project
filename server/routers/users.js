import express from 'express';

import data from '../data/data.js';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('get users');
    res.json(data);
});

export default router;
