const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const PORT = 3000;
const user = { username: 'jithin', password: '$2b$10$OFrm8bYVp/b9U8j5HVs6k.MtNSIhP15T0ieUcLPbyNCjSLu2y5OPi' };
const app = express();

app.use(bodyParser());


const authorize = (req, res, next) => {
  if (req.header('Authorization')) {
    bcrypt(req.header);
  }
};

app.use(authorize);

app.post('/signup', (req, res) => {
  if (user.username !== req.body.username) {
      res.send('Invalid creds')
  }
  if (bcrypt.compare(req.body.username, user.password, function(err, res){
      if (err) {
          res.send('Invalid credentials')
      }
      if (res) {
          res.send('Token')
      }
  })

  }
  res.send('Body parsed');
});

app.get('/', (req, res) => {
  res.send(['About time', 'Before Sunset', 'Beautiful Mind']);
});

app.listen('3000', () => { console.log(`Listening at port ${PORT}`); });
