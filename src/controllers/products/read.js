import Product from '../../Models/Products.js';

const displayAll = async (req, res, next) => {
	const allProducts = await Product.find();
	res.status(200).send(allProducts);
};

const displayById = async (req, res, next) => {
	const productId = req.params.id;
	if (!productId) {
		return res.status(401).send('error');
	}

	const product = await Product.findById(productId);
	if (!product) {
		return res.status(401).send('The item is not available');
	}

	res.status(200).send(product);
};

const displayTop5 = async (req, res) => {
	const allProducts = await Product.find().sort({price: -1}).limit();
	res.status(200).send(allProducts);
};

const read = {
	displayAll,
	displayById,
	displayTop5,
};

export default read;
