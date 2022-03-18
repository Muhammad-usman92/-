const res = require("express/lib/response");
const ProductService = require("../services/product.service");

class ProductController {
	onGetAll = async (req, res) => {
		// console.log(req)
		const query = req.query.query ||""
		const products = await ProductService.getAll(query);

		res.status(200).json({
			success: true,
			data: products,
		});
	};
	onGetById = async (req, res) => {
		const product = await ProductService.getById(req.params.id);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
onGetCategoryId=async (req,res) => {
	const product=await ProductService.GetCategoryId(req.params.CategoryId);

	res.status(200).json({
		success:true,
		data:product,
	})

}
	onCreate = async (req, res) => {
		const product = await ProductService.create(req.body);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
	ondelete= async (req, res) => {
		const product = await ProductService.delete(req.params.id);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
}


module.exports = new ProductController();
