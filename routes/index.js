import express from 'express';
import Candidates from "../models/item.js";
const router = express.Router();

router.get('/getAll', async (req, res) => {
  try {
    const candidates = await Candidates.find();//
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении данных' });
  }
});

router.post('/add', async (req, res) => {
  try {
    const reqBody = req.body;
    const candidate = new Candidates(reqBody);
    const savedCandidates = await candidate.save();
    res.status(201).json(savedCandidates);
  }catch (err){
    res.status(500).json({ message: 'Ошибка при записи данных' });
  }
})

router.delete('/delete/:id', async (req, res) => {
  try{
    const candidateId = req.params.id;
    const deleteCandidate = await Candidates.findByIdAndDelete(candidateId);
    if (!deleteCandidate){
      res.status(404).json({message: 'Кандидат не найден'});
    }else {
      res.status(204).send();
    }
  }catch (err){
    res.status(500).json({message: 'Ошибка при удалении записи'});
  }
})

router.patch('/update/:id', async (req, res) => {
  try{
    const updateDATA = req.body;
    const candidateId = req.params.id;
    const updatedCandidate = await Candidates.findById(candidateId).updateOne(updateDATA)
    if (!candidateId){
      res.status(404).json({message : 'кандидат не найден'})
    }else if(!updateDATA){
      res.status(404).json({message : 'нет данных для обновления'})
    }
    else{
      res.status(201).json(updatedCandidate);
    }
  }catch (err){
    res.status(500).json({message: 'Ошибка при обновлении записи'});
  }
})

router.get('/findItem/:company', async (req, res) => {
  try {
    const candidateCompany = req.params.company;
    const candidate = await Candidates.findOne({ company: candidateCompany }); // Предполагая, что у вас есть поле company в модели Candidates
    if (!candidate) {
      return res.status(404).json({ message: 'Кандидат не найден' });
    }
    res.status(200).json({ id: candidate._id, ...{candidate} });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении данных' });
  }
});
export default router;
