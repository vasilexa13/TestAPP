import express from 'express';
import { MongoClient } from 'mongodb';
import routes from './routes/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

const url = 'mongodb://127.0.0.1:27017/';
const mongoClient = new MongoClient(url);

async function start() {
  try {
    await mongoClient.connect();

    app.use('/', routes);

    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();

export default app;
