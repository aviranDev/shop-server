import Cart from '../../Models/Cart.js';
import Product from '../../Models/Products.js';

const addProduct = async (req, res) => {
	const productId = req.params.id;
	const cart = new Cart(req.session.cart ? req.session.cart : {});
	const product = await Product.findById(productId);
	if (!product) {
		return res.status(404).send('The product is not exist yet.');
	}
	cart.add(product, product._id);
	req.session.cart = cart;
	console.log(req.session.cart);
	res.send(cart);
};

export default addProduct;
