const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/vasa', (req, res) => {
  res.send('Hello World!');
});

app.get('/mich', (req, res) => {
  res.send('Hello World!');
});

app.get('/apple', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

