const Sequelize = require("sequelize");
const { connection } = require("../config/db");

const Email = connection.define("Email", {
	Email: {
		type: Sequelize.STRING,
	},

});

module.exports = Email;
