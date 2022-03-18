const Product = require("../models/Products.model");
const Sequelize=require("sequelize")
const Op=Sequelize.Op

class ProductService {
	// getAll = async () => await Product.findAll({where:{title:"Pony "}});

	getAll = async (query) => await Product.findAll(
	{
		where :{ title: {
			[Op.like]: '%' + query + '%'
		}}
	});
	getById = async (id) => await Product.findOne({ where: { id } });
	GetCategoryId=async (CategoryId) => await Product.findAll({where:{CategoryId}}) 
	create = async (data) => await Product.create(data);
	update = () => {};
	delete = async (id) =>await Product.destroy({where:{id}}) ;
}

module.exports = new ProductService();
