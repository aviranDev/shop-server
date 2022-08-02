import Sales from '../../Models/Sales.js';
import Order from '../../Models/Order.js';
import Sum from '../../Models/Sum.js';
export const allSales = async (req, res) => {
	const allSales = await Sales.find();

	res.send(allSales);
};

export const top5Distinct = async (req, res) => {
	const arr = [];
	const orders = await Sales.distinct('title');
	orders.map(async (item, index) => {
		arr.push({id: index, item: item});
	});

	let limit = arr.slice(0, 5);
	res.send(limit);
};

export const top5 = async (req, res) => {
	const orders = await Sales.find().sort({sales: -1}).limit(5);
	res.send(orders);
};

export const dailySum = async (req, res) => {
	const list = await Sum.aggregate([
		{
			$match: {
				date: {
					$gte: new Date('2022-07-19T00:00:00.000Z'),
					$lt: new Date('2022-07-22T00:00:00.000Z'),
				},
			},
		},
		{
			$group: {_id: {order_id: '$order_id', total: '$price', date: '$date'}},
		},
	]);
	res.status(200).send(list);
};

export const dailyBasis = async (req, res) => {
	const dailyBasis = await Sum.find().sort({date: 1}).limit(5);
	res.status(200).send(dailyBasis);
};
