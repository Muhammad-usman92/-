const Order = require("../models/Order.model");

class OrderService {
	getAll = async () => await Order.findAll();
	getById = async (id) => await Order.findOne({ where: { id } });
	create = async (data) => await Order.create(data);
	update = () => {};
	delete = async (id) =>await Order.destroy({where:{id}}) ;

}

module.exports = new OrderService();
