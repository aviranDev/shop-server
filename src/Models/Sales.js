import mongoose from 'mongoose';

const Saleschema = new mongoose.Schema({
	product_id: {
		type: String,
	},
	title: {
		type: String,
	},
	price: {
		type: String,
	},
	sales: {
		type: Number,
		default: 0,
	},
	record: {
		type: Date,
		default: Date.now(),
	},
});

const Sale = mongoose.model('Sale', Saleschema);

export default Sale;
