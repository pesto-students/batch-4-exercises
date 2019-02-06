const express = require('express');
const { ObjectId } = require('mongodb');
const { getDb } = require('./database');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
let dbInstance;

app.get('/create/new', (req, res) => {
  // inserting single document
  dbInstance.insert({ developer: 'Google', project: 'Angular' }).then((success) => {
    console.log('Inserted one element');
  }, (error) => {
    console.error('Failed to insert Element', error);
  });

  // inserting multiple document
  dbInstance.insert([{ developer: 'Microsoft', project: 'VsCode' }, { developer: 'Google', project: 'Android' }]).then((success) => {
    console.log('Inserted multiple elements');
  }, (error) => {
    console.error('Failed to insert multiple elements', error);
  });

  dbInstance.find().toArray().then((data) => {
    res.send(data);
  });
});

// returning all projects
app.get('/projects', (req, res) => {
  dbInstance.find().toArray().then((data) => {
    res.send(data);
  });
});

app.get('/projects/:id', (req, res) => {
  const { id } = req.params;
  dbInstance.findOne({ _id: new ObjectId(id) }).then((data) => {
    res.send(data);
  });
});

getDb().then((db) => {
  dbInstance = db.collection('projects');
  app.listen(3000, () => {
    console.log('Listening on port number 3000');
  });
});
