const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const jwt = require('jsonwebtoken');

const superSecretKey = 'mysecret';

const not = condition => !condition;

const users = [];

const requireLoggedIn = (req, res, next) => {
  const { token } = req.headers;
  if (not(token)) {
    return res.status(401).send('Not Authenticated');
  }

  const tokenIsValid = jwt.verify(token, superSecretKey);

  if (not(tokenIsValid)) {
    return res.status(400).send('Invalid Token');
  }

  next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', requireLoggedIn, (req, res) => {
  res.json({
    nitinsFavoriteMovies: [],
    movieCount: 0,
  });
});

app.post('/signup', (req, res) => {
  const token = jwt.sign(
    {
      name: req.body.name,
    },
    superSecretKey,
  );

  console.log(token);

  const user = {
    name: req.body.name,
    password: req.body.password,
    token,
  };

  users.push(user);
  res.set('token', token);
  console.log('user added final users list :', users);
  return res.json({ token });
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('listening of 3000');
});
