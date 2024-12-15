import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import cors from 'cors'

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

const mongoUrl = process.env.MONGODB_URL;

async function start() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Подключено к MongoDB");

    app.use('/', routes);

    app.listen(PORT, () => {
      console.log(`Сервер запущен на порту: ${PORT}`);
    });
  } catch (error) {
    console.error("Не удалось подключиться к MongoDB:", error);
    process.exit(1);
  }
}

start();

export default app;
