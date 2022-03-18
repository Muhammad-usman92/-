const OrderService = require("../services/order.service");
const ShippingAddress = require("../services/shippingAddress.service");
const OrderedItems = require("../services/orderedItems.service");
// const sendMail = require("../utils/sendMail");

class OrderController {
	onGetAll = async (req, res) => {
		const orders = await OrderService.getAll();

		res.status(200).json({
			success: true,
			data: orders,
		});
	};
	onGetById = async (req, res) => {
		const order = await OrderService.getById(req.params.id);

		res.status(200).json({
			success: true,
			data: order,
		});
	};
	onCreate = async (req, res, next) => {
		const tempData = req.body;
		const shippingAddress = tempData.shippingAddress;
		try {
			const createdOrder = await OrderService.create(req.body);
			for (let i = 0; i < tempData.items.length; i++) {
				await OrderedItems.create({
					productId: tempData.items[i].id,
					orderId: createdOrder.id,
					quantity:tempData.items[i].quantity,
					price:tempData.items[i].price,
					title:tempData.items[i].title,
					itemTotal:tempData.items[i].itemTotal,
				});
			}
			const createdShippingAddress = await ShippingAddress.create({
				...shippingAddress,
				orderId: createdOrder.id,
			});

			// sendMail(next);
			res.status(200).json({
				success: true,
				data: {
					...createdOrder,
					...createdShippingAddress,
				},
			});
		} catch (error) {
			console.log("CBM", { error });
		}
	};
}

module.exports = new OrderController();
