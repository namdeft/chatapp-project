import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Successfully api');
});

app.listen(8080, () => {
    console.log('App is running in port: 8080');
});
