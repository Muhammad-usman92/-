const OrderedItem = require("../models/OrderedItem.model");

class OrderItemsService {
	getAll = async () => await OrderedItem.findAll();
	getById = async (id) => await OrderedItem.findOne({ where: { id } });
	GetCategoryId=async (CategoryId) => await OrderedItem.findAll({where:{CategoryId}})
	create = async (data) => await OrderedItem.create(data);
	update = () => {};
	delete = () => {};
}

module.exports = new OrderItemsService();
