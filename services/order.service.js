const Order = require("../models/Order.model");

class OrderService {
	getAll = async () => await Order.findAll();
	getById = async (id) => await Order.findOne({ where: { id } });
	create = async (data) => await Order.create(data);
	update = () => {};
	delete = () => {};
}

module.exports = new OrderService();
