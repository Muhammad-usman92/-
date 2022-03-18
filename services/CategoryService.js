const Category = require("../models/CategoryModal");
const Product = require("../models/Products.model");

class CategoryService {
	getAll = async () => await Category.findAll({
        include: Product
    });
	getById = async (id) => await Category.findOne({ where: { id } });
	// onGetByCategryId = async (CategoryId) => await Category.findOne({ where: { CategoryId } });
	create = async (data) => await Category.create(data);
	update = () => {};
	delete = () => {};
}

module.exports = new CategoryService();
