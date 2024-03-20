const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
 res.send('Hello there!');
});

app.get('/prime', (req, res) => {
 res.send('1 2 3 5 7');
});

app.get('/even', (req, res) => {
 res.send('2 4 6 8 10 ....');
});

app.get('/fib', (req, res) => {
 res.send('0 1 1 2 3 5 8 ....');
});


app.listen(port, () => {
 console.log(`Microservice Running on port ${port}`);
});