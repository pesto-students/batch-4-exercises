const express = require('express');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hi, I am a server response');
});

app.get('/movie/:title', (req, res) => {
  const { title } = req.params;
  res.send(`My favorite movie is ${title}`);
});

app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on ${port}`);
});
