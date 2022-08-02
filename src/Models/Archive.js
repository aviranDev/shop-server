import mongoose from 'mongoose';

const ArchiveSchema = new mongoose.Schema({
	cart: {
		type: Array,
		required: true,
	},
	createAt: {
		type: Date,
		default: Date.now(),
	},
});

const Archive = mongoose.model('Archive', ArchiveSchema);

export default Archive;
