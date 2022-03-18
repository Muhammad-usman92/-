const CategoryService = require("../services/CategoryService");

class CategoryController {
	onGetAll = async (req, res) => {
		const products = await CategoryService.getAll();

		res.status(200).json({
			success: true,
			data: products,
		});
        // res.send("helllo from the Abbaya side")
	};
	onGetById = async (req, res) => {
		const product = await CategoryService.getById(req.params.id);

		res.status(200).json({
			success: true,
			data: product,
		});
	}
	// };	onGetByCategryId = async (req, res) => {
	// 	const product = await CategoryService.onGetByCategryId(req.params.CategoryId);

	// 	res.status(200).json({
	// 		success: true,
	// 		data: product,
	// 	});
	// };
	onCreate = async (req, res) => {
		const product = await CategoryService.create(req.body);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
}

module.exports = new CategoryController ();
