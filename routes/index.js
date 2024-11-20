import express from 'express';

const router = express.Router();

router.get('/example', (req, res) => {
  res.send("Hello from /example route!");
});

// Другие маршруты
// router.post('/another-example', (req, res) => { ... });

export default router;
