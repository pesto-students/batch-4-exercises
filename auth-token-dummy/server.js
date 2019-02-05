const express = require('express');

const router = express();

router.get('/', (req, res) => res.send('dashboard'));
router.post('/signup', (req, res) => res.send('signup'));

const PORT = 8000;
router.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
