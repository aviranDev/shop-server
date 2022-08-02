import Product from '../../Models/Products.js';
import validation from '../../lib/validateProduct.js';

const updateProduct = async (req, res, next) => {
	const credentialsError = validation(req.body);
	if (credentialsError) {
		return res.status(400).send(credentialsError);
	}

	const product = req.params.id;
	if (!product) {
		return res.status(400).send('error');
	}

	const updatedProduct = await Product.findByIdAndUpdate(product, req.body, {
		new: true,
	});
	if (!updatedProduct) {
		return res.status(401).send('some error exxourd');
	}

	res.status(200).send(updatedProduct);
};

export default updateProduct;
