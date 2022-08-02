import {
	filedRequired,
	charactersLongMinimum,
	charactersLongMax,
	inValid,
	dollarMin,
	dollarMax,
	rejex,
	productKeys,
} from '../utils/utils.js';

const validation = ({title, price, description}) => {
	if (!title) return filedRequired(productKeys.TITLE);
	if (title.length < 2) return charactersLongMinimum(productKeys.TITLE, 2);
	if (title.length > 20) return charactersLongMax(productKeys.TITLE, 20);

	if (!description) return filedRequired(productKeys.DESCRIPTION);
	if (description.length < 2)
		return charactersLongMinimum(productKeys.DESCRIPTION, 2);
	if (description.length > 70)
		return charactersLongMax(productKeys.DESCRIPTION, 70);

	if (!price) return filedRequired(productKeys.PRICE);
	if (!rejex.PRICE.test(price)) return inValid(productKeys.PRICE);
	if (price < 1) return dollarMin(productKeys.PRICE, 1);
	if (price > 400) return dollarMax(productKeys.PRICE, 400);

	return null;
};

export default validation;
