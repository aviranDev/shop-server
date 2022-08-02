import {serverMessage} from '../utils/utils.js';

const internalError = (req, res, next) => {
	const error = new Error(serverMessage.NOT_FOUND);
	error.status = 500;
	next(error);
};

const handler = (err, req, res, next) => {
	res.status(err.status).send(err.message);
};

const errors_Handler = {
	internalError,
	handler,
};

export default errors_Handler;
