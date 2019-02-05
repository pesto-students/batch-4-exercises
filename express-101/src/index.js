const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hey, I am server response'));

app.get('/movie/:title', (req, res) => {
  const { title } = req.params;
  return res.send(`My favorite movie is ${title}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
