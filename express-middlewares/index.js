const express = require('express');

const app = express();

const favoriteLanguages = ['python', 'python', 'python', 'python', 'python'];

const favoritePackages = [
  'is-odd',
  'is-number',
  'is-even',
  'is-thirteen',
  'linkedin-login-for-react (created by @niinpatel btw)'
];

const removeSlashFromBeginning = string => {
  return string.substring(1);
};

const setCorrectHeader = () => (req, res, next) => {
  const header = removeSlashFromBeginning(req.url);
  const time = new Date().toUTCString();
  console.log(`middleware header: ${header}, time: ${time}`);
  res.set('middleware-header', header);
  next();
};

app.use(setCorrectHeader());

app.get('/languages', (req, res) => {
  return res.json(favoriteLanguages);
});

app.get('/packages', (req, res) => {
  return res.json(favoritePackages);
});

app.listen('3000', err => {
  if (err) throw err;
  console.log('listening of 3000');
});
