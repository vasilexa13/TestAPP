import mongoose from 'mongoose';

const candidatesSchema = new mongoose.Schema({
    company: { type: String, required: true },
    vacancy: { type: String, required: true },
    minSalary: { type: Number, required: true },
    maxSalary: { type: Number, required: true },
    resStatus:{type: Boolean, required: true},
    note:{type: String, required: true}
});

const Candidates = mongoose.model('candidates', candidatesSchema, 'dataCandidates');

export default Candidates;