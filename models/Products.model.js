const Sequelize = require("sequelize");
const { connection } = require("../config/db");
// const productController = require("../controllers/product.controller");
const Category=require("./CategoryModal")

const Product = connection.define("product", {
	title: {
		type: Sequelize.STRING,
	},
	imgUrl: {
		type: Sequelize.STRING,
	},
	price: {
		type: Sequelize.INTEGER,
	},
	description: {
		type: Sequelize.STRING,
	},
	weight:{
		type:Sequelize.INTEGER,
	}
});
// Category.hasMany(Product)
// Product.hasOne(Category)

Product.belongsTo(Category)
Category.hasMany(Product)
module.exports = Product;
