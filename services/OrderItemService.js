const OrderedItem = require("../models/OrderedItem.model");

class OrderedItemService {
	getAll = async () => await OrderedItem.findAll();

	// getAll = async (searchText) => await Product.findAll(
	// {
		// where :{ title: {
			// [Op.like]: '%' + request.body.query + '%'
		// }}
	// };
	getById = async (id) => await OrderedItem.findOne({ where: { id } });
	GetCategoryId=async (orderId) => await OrderedItem.findAll({where:{orderId}}) 
	create = async (data) => await OrderedItem.create(data);
	update = () => {};
	delete = () => {};
}

module.exports = new OrderedItemService();
