const express = require('express');

const router = express.Router();

let languages = [];

router
  .route('/')
  .get((req, res) => res.render('index', { languages }))
  .post((req, res) => {
    const { name } = req.body;
    languages.push({
      id: Math.floor(Math.random() * 10000).toString(),
      name,
    });
    return res.redirect('/');
  });

router.get('/new', (req, res) => res.render('new'));

router.route('/:id/edit').get((req, res) => {
  const language = languages.find(l => l.id === req.params.id);
  return res.render('edit', { language });
});

router.patch('/:id', (req, res) => {
  languages = languages.map((language) => {
    if (language.id === req.params.id) {
      return { id: language.id, name: req.body.name };
    }
    return language;
  });
  return res.redirect('/languages');
});

router.delete('/:id', (req, res) => {
  languages = languages.filter(language => language.id !== req.params.id);
  return res.redirect('/languages');
});

module.exports = router;
