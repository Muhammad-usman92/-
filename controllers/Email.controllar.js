const res = require("express/lib/response");
const EmailService = require("../services/Email.service");

class EmailController {
	onGetAll = async (req, res) => {
		const products = await EmailService.getAll('Locket Set 01');

		res.status(200).json({
			success: true,
			data: products,
		});
	};
	onGetById = async (req, res) => {
		const product = await EmailService.getById(req.params.id);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
onGetCategoryId=async (req,res) => {
	const product=await EmailService.GetCategoryId(req.params.CategoryId);

	res.status(200).json({
		success:true,
		data:product,
	})

}
	onCreate = async (req, res) => {
		const product = await EmailService.create(req.body);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
	ondelete= async (req, res) => {
		const product = await EmailService.delete(req.params.id);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
}


module.exports = new EmailController();
