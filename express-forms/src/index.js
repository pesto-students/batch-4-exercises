const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.redirect('/form-with-get'));

app.get('/form-with-get', (req, res) => res.render('form-with-get'));

app.get('/form-with-post', (req, res) => res.render('form-with-post'));

app.get('/submit-form-with-get', (req, res) => {
  const { first: firstName, last: lastName } = req.query;
  res.send({
    firstName,
    lastName,
  });
});

app.post('/submit-form-with-post', (req, res) => {
  const { first: firstName, last: lastName } = req.body;
  res.send({
    firstName,
    lastName,
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
