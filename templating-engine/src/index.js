const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../views'));

const languages = ['JavaScript', 'Haskell', 'Python'];

app.get('/', (req, res) => {
  return res.render('index', { languages });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
