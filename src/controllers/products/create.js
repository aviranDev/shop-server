import Product from '../../Models/Products.js';
import validation from '../../lib/validateProduct.js';

const createProduct = async (req, res, next) => {
	const credentialsError = validation(req.body);
	if (credentialsError) {
		return res.status(400).send(credentialsError);
	}

	const findDuplicatedTitles = await Product.findOne({title: req.body.title});
	if (findDuplicatedTitles) {
		return res.status(400).send('The product title has been taken already.');
	}

	const product = await Product.create({
		title: req.body.title,
		price: req.body.price,
		description: req.body.description,
		image: req.body.image
			? req.body.image
			: 'https://images.all-free-download.com/images/graphiclarge/new_product_stamp_312832.jpg',
	});
	if (!product) {
		return res.status(401).send('some error exxourd');
	}
	await product.save();
	res.status(201).send(product);
};

export default createProduct;
