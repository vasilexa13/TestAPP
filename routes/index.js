import express from 'express';
import Candidates from "../models/item.js";
const router = express.Router();

router.get('/getAll', async (req, res) => {
  try {
    const candidates = await Candidates.find();//
    res.status(200).json(candidates);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    res.status(500).json({ message: 'Ошибка при получении данных' });
  }
});

router.post('/add', async (req, res) => {
  try {
    const reqBody = req.body;
    res.status(200).json(reqBody);
  }catch (err){
    console.error("Ошибка при записи данных", err)
    res.status(500).json({ message: 'Ошибка при записи данных' });
  }
})

router.get('/test', (req, res) => {
  res.send("Hello from /example route!");
});

router.post('/postTest', (req, res) => {
  const data = req.body;
  res.status(201).send("Данные получены: " + JSON.stringify(data));
});

export default router;
