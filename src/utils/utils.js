export const portMessage = (port) => {
	console.log(`Listening on port ${port}`);
};

export const filedRequired = (string) => {
	const condition = `${string} is required`;
	return condition;
};

export const charactersLongMinimum = (string, characterLong) => {
	const condition = `${string} must be at least ${characterLong} characters long`;
	return condition;
};

export const charactersLongMax = (string, characterLong) => {
	const condition = `${string} must be no more then ${characterLong} characters long`;
	return condition;
};

export const inValid = (string) => {
	const condition = `${string} is invalid`;
	return condition;
};

export const dollarMin = (string, num) => {
	return `${string} is has to be ${num} dollar minimum`;
};

export const dollarMax = (string, num) => {
	return `${string} is has to be ${num} dollar maximum`;
};

export const rejex = {
	PRICE: /^[0-9]*$/,
};

export const productKeys = {
	TITLE: 'Title',
	DESCRIPTION: 'Description',
	PRICE: 'Price',
};

export const serverMessage = {
	LISTEN: 'Listening on post ',
	VARIFY_MESSAGE: 'Verification email is sent to your email account',
	NOT_FOUND: 'Not Found',
	CONNECTED_TO_MONGO: 'Connected To MongoDB',
	MONGO_DISCONNECTED: 'There is some error occured',
};
