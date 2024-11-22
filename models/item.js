import mongoose from 'mongoose';

const candidatesSchema = new mongoose.Schema({
    company: { type: String, required: true },
    vacancy: { type: String, required: true },
    // salaryRange:{type: Object ,required: true },
    resStatus:{type: Boolean, required: true},
    note:{type: String, required: true}
});

const Candidates = mongoose.model('candidates', candidatesSchema, 'dataCandidates');

export default Candidates;