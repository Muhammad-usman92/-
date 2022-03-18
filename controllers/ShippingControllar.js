const res = require("express/lib/response");
const ShippingService = require("../services/ShippingService");

class ProductController {
	onGetAll = async (req, res) => {
		const products = await ShippingService.getAll();

		res.status(200).json({
			success: true,
			data: products,
		});
	};
	onGetById = async (req, res) => {
		const product = await ShippingService.getById(req.params.id);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
onGetCategoryId=async (req,res) => {
	const product=await ShippingService.GetCategoryId(req.params.orderId);

	res.status(200).json({
		success:true,
		data:product,
	})

}
	onCreate = async (req, res) => {
		const product = await ShippingService.create(req.body);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
}

module.exports = new ProductController();
