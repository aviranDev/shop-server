import Order from '../../Models/Order.js';
import Cart from '../../Models/Cart.js';
import Sale from '../../Models/Sales.js';
import Sum from '../../Models/Sum.js';

const today = new Date();
const getDate = today.toISOString().slice(0, 10);


const checkout = async (req, res, next) => {
	if (!req.session.cart) {
		return res.send({ products: null });
	}
	const cart = new Cart(req.session.cart ? req.session.cart : []);

	let cartProducts = cart.generateArray();

	cartProducts.map(async (item) => {
		const records = await Sale.find().where('product_id').in(item.item._id);
		if (records.length >= 1) {
			await Sale.findOneAndUpdate(
				{ product_id: item.item._id },
				{ $inc: { sales: item.qty } },
				{ new: true }
			);
		} else {
			return await Sale.create({
				product_id: item.item._id,
				title: item.item.title,
				price: item.price,
				sales: item.qty,
			});
		}
	});

	const order = new Order({
		cart: cart,
		fullDate: getDate,
	});

	req.session.cart = null;
	await order.save();
	next();
};

export default checkout;
