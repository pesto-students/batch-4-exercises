const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
const languages = ['JavaScript', 'Haskell', 'Python'];

app.get('/', (req, res) => res.render('index.ejs', { languages }));

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
