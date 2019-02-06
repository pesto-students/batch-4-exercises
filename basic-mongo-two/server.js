const express = require('express');

const app = express();
const mongo = require('mongodb');
const bodyParser = require('body-parser');

const { getDb } = require('./dbconnect');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const database = new Promise((resolve) => {
  resolve(getDb());
});

app.get('/projects', (req, res) => {
  database
    .then((db) => {
      return db
        .collection('projects')
        .find({})
        .toArray();
    })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      return res.status(500).json({ error: err.toString() });
    });
});

app.post('/projects', (req, res) => {
  database
    .then((db) => {
      const { developer, project } = req.body;

      db.collection('projects').insertOne({
        developer,
        project,
      });
    })
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.status(500).json({ error: err.toString() });
    });
});

app.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  database
    .then((db) => {
      return db.collection('projects').findOne({
        _id: mongo.ObjectID(id),
      });
    })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err.toString() });
    });
});

app.put('/projects/:id', (req, res) => {
  database
    .then((db) => {
      const { id } = req.params;
      const { developer, project } = req.body;

      db.collection('projects').updateOne(
        { _id: mongo.ObjectID(id) },
        {
          $set: {
            developer,
            project,
          },
        },
      );
    })
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.status(500).json({ error: err.toString() });
    });
});

app.delete('/projects/:id', (req, res) => {
  database
    .then((db) => {
      const { id } = req.params;

      db.collection('projects').deleteOne({
        _id: mongo.ObjectID(id),
      });
    })
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.status(500).json({ error: err.toString() });
    });
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('listening on 3000');
});
