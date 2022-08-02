import Cart from '../../Models/Cart.js';

const displayCart = async (req, res) => {
	//1. DSPLAY SESSION CART
	if (!req.session.cart) {
		return res.send({products: null});
	}
	const cart = new Cart(req.session.cart);

	//2. RESPONSE
	res.send({
		products: cart.generateArray(),
		totalPrice: cart.totalPrice,
		totalQty: cart.totalQty,
	});
};

export default displayCart;
