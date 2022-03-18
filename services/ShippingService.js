const ShippingAddress = require("../models/ShippingAddress.model");

class ShippingAddressService {
	getAll = async () => await ShippingAddress.findAll();

	// getAll = async (searchText) => await Product.findAll(
	// {
		// where :{ title: {
			// [Op.like]: '%' + request.body.query + '%'
		// }}
	// };
	getById = async (id) => await ShippingAddress.findOne({ where: { id } });
	GetCategoryId=async (orderId) => await ShippingAddress.findAll({where:{orderId}}) 
	create = async (data) => await ShippingAddress.create(data);
	update = () => {};
	delete = () => {};
}

module.exports = new ShippingAddressService();
