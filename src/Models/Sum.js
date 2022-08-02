import mongoose from 'mongoose';

const SumSchema = new mongoose.Schema({
	total: {
		type: Number,
	},
	fullDate: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

const Sum = mongoose.model('Sum', SumSchema);

export default Sum;
