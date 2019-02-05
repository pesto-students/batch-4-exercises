const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const PORT = 8000;
const { APP_SECRET } = process.env;

app.use(express.json());
app.use(express.urlencoded());

const tokens = [];

const authenticate = (req, res, next) => {
  const receievedToken = req.header('token');
  if (tokens.find(token => token === receievedToken)) {
    try {
      jwt.verify(receievedToken, APP_SECRET);
    } catch (e) {
      res.status(401).send('Invalid token.');
    }
    next();
  } else {
    res.status(401).send('Invalid token.');
  }
};

app.get('/', authenticate, (req, res) => {
  res.send({ favMovies: ["Lord of the rings", "The Waking Life", "Batman Triology"] });
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const token = jwt.sign({
    username,
  }, APP_SECRET);
  tokens.push(token);
  res.header('token', token).send('Successfull Operation');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});

module.exports = app;
