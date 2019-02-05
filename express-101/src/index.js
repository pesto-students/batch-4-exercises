const express = require('express');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Hey, I am server response');
});

// returns the favorie movie name given in query parameter in url
app.get('/movie/:title', (req, res) => {
  const { title } = req.params;
  res.send(`My favorite movie is ${title}`);
});


app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});

module.exports = app;
