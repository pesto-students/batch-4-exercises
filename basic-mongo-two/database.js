const { MongoClient } = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'mongo-data';

let connectionInstance;

const getDbClient = async () => {
  if (!connectionInstance) {
    connectionInstance = await MongoClient.connect(MONGO_URL, { useNewUrlParser: true });
  }
  return connectionInstance;
};

const getDb = async () => {
  await getDbClient();

  if (!connectionInstance) {
    throw new Error('Db not connected');
  }

  return connectionInstance.db(DB_NAME);
};

let dbInstance;
getDb().then((db) => {
  dbInstance = db.collection('projects');
  // finding some element
  dbInstance.find().toArray().then((data) => {
    console.log(data);
  });

  // inserting single document
  dbInstance.insert({ developer: 'Google', project: 'Angular' }).then(() => {
    console.log('Inserted one element');
  }, () => {
    console.error('Failed to insert Element');
  });

  // inserting multiple document
  dbInstance.insert([{ developer: 'Microsoft', project: 'VsCode' }, { developer: 'Google', project: 'Android' }]).then(() => {
    console.log('Inserted multiple elements');
  }, () => {
    console.error('Failed to insert multiple elements');
  });
});

module.exports = { dbInstance };
