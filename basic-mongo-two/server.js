const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');

const MongoClient = mongodb.MongoClient;

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

const DB_URL = 'mongodb://localhost:27017/projects';

let db;


MongoClient.connect(DB_URL, (err, client) => {
  if (err) {
    throw err;
  }
  db = client.db('projects');
});


app.get('/projects', (req, res) => {
  db.collection('projects').find().toArray((err, results) => {
    res.send({ projects: results });
  });
});

app.get('/projects/:id', (req, res) => {
  // console.log(req.params.id);
  const project = db.collection('projects').findOne({ _id: mongodb.ObjectID(req.params.id) });
  res.send(project);
});

app.post('/projects', (req, res) => {
  db.collection('projects').insert({ developer: req.body.developer, project: req.body.project });
  res.status(201);
  res.send('Success');
});

app.put('/projects/:id', (req, res) => {
  db.collection('projects').update(
    { _id: mongodb.ObjectID(req.params.id) },
    { developer: req.body.developer, project: req.body.project },
  );
  res.status(204);
  res.send('Updated');
});


app.delete('/projects/:id', (req, res) => {
  db.collection('projects').deleteOne({ _id: mongodb.ObjectID(req.params.id) });
  res.status(202);
  res.send('Delete');
});


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at port ${PORT}`);
});
