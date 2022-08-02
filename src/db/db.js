import mongoose from 'mongoose';
import config from '../config/config.js';

const mongoDb = async () => {
	try {
		await mongoose.connect('mongodb://host.docker.internal:27017/shopping_site' || config.mongo.url, {
			auth: {
				username: "admin",
				password: "123456",
			},
			authSource: "admin",
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to mongoDB');
	} catch (error) {
		console.log('There is sopme error eccured', error);
	}
};

export default mongoDb;
