const res = require("express/lib/response");
const OrderItemService = require("../services/OrderItemService");

class OrderItemController {
	onGetAll = async (req, res) => {
		const products = await OrderItemService.getAll();

		res.status(200).json({
			success: true,
			data: products,
		});
	};
	onGetById = async (req, res) => {
		const product = await OrderItemService.getById(req.params.id);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
onGetCategoryId=async (req,res) => {
	const product=await OrderItemService.GetCategoryId(req.params.orderId);

	res.status(200).json({
		success:true,
		data:product,
	})

}
	onCreate = async (req, res) => {
		const product = await OrderItemService.create(req.body);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
}

module.exports = new OrderItemController();
