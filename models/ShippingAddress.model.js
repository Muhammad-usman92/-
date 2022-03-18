const Sequelize = require("sequelize");
const { connection } = require("../config/db");

const ShippingAddress = connection.define("shippingAddress", {
	firstName: {
		type: Sequelize.STRING,
	},
	lastName: {
		type: Sequelize.STRING,
	},
	address: {
		type: Sequelize.STRING,
	},
	contactNo:{
		type:Sequelize.STRING,
	},
	near: {
		type: Sequelize.STRING,
	},
	Email:{
		type:Sequelize.STRING
	},
	
	city: {
		type: Sequelize.STRING,
	},
	postalCode: {
		type: Sequelize.STRING,
	},
	total:{
		type:Sequelize.INTEGER
	},
	distance:{
		type:Sequelize.STRING,
	}
	
});

module.exports = ShippingAddress;
