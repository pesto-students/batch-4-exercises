const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../views'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
  return res.redirect('/form-with-get');
});

app.get('/form-with-get', (req, res) => {
  return res.render('form-with-get');
});

app.get('/submit-form-with-get', (req, res) => {
  const { first, last } = req.query;
  res.send({ firstName: first, lastName: last });
});

app.post('/submit-form-with-post', (req, res) => {
  const { first, last } = req.body;
  res.send({ firstName: first, lastName: last });
});

app.get('/form-with-post', (req, res) => {
  return res.render('form-with-post');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
