const Sequelize = require("sequelize");
const { connection } = require("../config/db");
const ShippingAddress = require("./ShippingAddress.model");
const OrderedItem = require("./OrderedItem.model");

const Order = connection.define(
	"order",
	{
		orderNo: {
			type: Sequelize.STRING,
		},
		subTotal: {
			type: Sequelize.INTEGER,
		},
		total: {
			type: Sequelize.INTEGER,
		},
		contactInfo: {
			type: Sequelize.STRING,
		},
	},
	{
		hooks: {
			beforeValidate: (e) => {
				console.log("CBM", { e });
			},
		},
	}
);

Order.hasOne(ShippingAddress);
ShippingAddress.belongsTo(Order);
Order.hasMany(OrderedItem);
OrderedItem.belongsTo(Order);

module.exports = Order;
