const Sequelize = require("sequelize");
const { connection } = require("../config/db");
const product=require("./Products.model");

const OrderedItem = connection.define("OrderedItem", {
	productId: {
		type: Sequelize.INTEGER,
	},
	// quantity:{
	// 	type:Sequelize.INTEGER
	// },
	price:{
		type:Sequelize.INTEGER,
	},
	title:{
		type:Sequelize.STRING,
	},
	itemTotal:{
		type:Sequelize.INTEGER,
	},

});

OrderedItem.belongsTo(product)
product.hasMany(OrderedItem)


module.exports = OrderedItem;
