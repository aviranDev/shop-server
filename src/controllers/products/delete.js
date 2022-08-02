import Product from '../../Models/Products.js';

const deleteProduct = async (req, res, next) => {
	const productId = req.params.id;
	if (!productId) {
		return res.status(401).send('error');
	}

	const removedProduct = await Product.findByIdAndRemove(productId);
	if (!removedProduct) {
		return res.status(401).send('some error eccured');
	}

	res.status(200).send('The product has been removed');
};

export default deleteProduct;
