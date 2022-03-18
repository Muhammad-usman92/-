const ShippingAddress = require("../models/ShippingAddress.model");

class ShippingAddressService {
	getAll = async () => await ShippingAddress.findAll();
	getById = async (id) => await ShippingAddress.findOne({ where: { id } });
	create = async (data) => await ShippingAddress.create(data);
	update = () => {};
	delete = () => {};
}

module.exports = new ShippingAddressService();
