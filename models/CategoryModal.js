const Sequelize = require("sequelize");
const { connection } = require("../config/db");
// const bracelatesController = require("../controllers/bracelatesController");

const Category = connection.define("Category", {
	Name: {
		type: Sequelize.STRING,
	},
    parentId: {
        type: Sequelize.INTEGER,
    },
	url: {
		type: Sequelize.STRING,
	}
});

module.exports = Category;
