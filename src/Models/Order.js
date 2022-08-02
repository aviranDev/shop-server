import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
	cart: {
		type: Array,
		required: true,
	},
	fullDate: {
		type: String,
	},
	createAt: {
		type: Date,
		default: Date.now(),
	},
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
