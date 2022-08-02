import Order from '../../Models/Order.js';
import Sum from '../../Models/Sum.js';
const today = new Date();
const getDate = today.toISOString().slice(0, 10);
today.setDate(today.getDate() - 1);



function padTo2Digits(num) {
	return num.toString().padStart(2, '0');
}

function formatDate(date) {
	return [
		date.getFullYear(),
		padTo2Digits(date.getMonth() + 1),
		padTo2Digits(date.getDate()),
	].join('-');
}


let yesterday = formatDate(today)
console.log(yesterday);
let totalPrice = 0;
let expired = true;

const dailySum = async (req, res) => {
	const orders = await Order.find();
	orders.map(async (order) => {
		if (order.fullDate > yesterday) {
			order.cart.map(async (item) => {
				totalPrice += item.totalPrice;
			});
		}
	});

	const find = await Sum.find();
	find.map(async (val) => {
		if (val.fullDate > yesterday) {
			console.log(val.fullDate)
			console.log(yesterday)
			expired = false;
			await Sum.findOneAndUpdate(
				{ fullDate: val.fullDate },
				{ total: totalPrice },
				{ new: true }
			);
		}
	});

	const dailySumResult = new Sum({
		total: totalPrice,
		fullDate: getDate,
	});

	if (expired) {
		await dailySumResult.save();
	}
	totalPrice = 0;
	res.status(200).send('Total sum has been sent to the Database');
};

export default dailySum;
