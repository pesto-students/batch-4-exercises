const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/new', (req, res) => {
  res.render('new');
});

router.get('/edit', (req, res) => {
  res.send('edit');
});

module.exports = router;
