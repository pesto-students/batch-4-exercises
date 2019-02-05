/* eslint-disable import/no-unresolved */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

const parseParams = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => res.redirect('/form-with-get'));

app.get('/form-with-get', (req, res) => res.render('form-with-get'));

app.get('/form-with-post', (req, res) => res.render('form-with-post'));

app.get('/submit-form-with-get', parseParams, (req, res) => {
  const { first: firstName, last: lastName } = req.query;

  const response = {
    firstName,
    lastName,
  };

  res.setHeader('Content-Type', 'text/plain');
  res.send(JSON.stringify(response));
});

app.post('/submit-form-with-post', parseParams, (req, res) => {
  const { first: firstName, last: lastName } = req.body;

  const response = {
    firstName,
    lastName,
  };

  res.setHeader('Content-Type', 'text/plain');
  res.send(JSON.stringify(response));
});

app.listen(3000, () => {
  /* eslint-disable-next-line no-console */
  console.log('Server is listening on port 3000');
});
