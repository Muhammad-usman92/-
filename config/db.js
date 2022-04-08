const Sequelize = require("sequelize");

class Database {
	connection = null;

	getConnection = () => {
		if (!this.connection) {
			try {
				const temp = new Sequelize(
					"heroku_6ebe1a057a88886",
					"b8d3d65ff6a1f7" ,
					"706cce50",
					{
						host: "us-cdbr-east-05.cleardb.net",
						dialect: "mysql",
						logging:true
					}
				);
				this.connection = temp;

				console.log("Successfully connected to database");

				return temp;
			} catch (error) {
				console.error("Unable to connect to the database" + error);
				process.exit(1);
			}
		} else {
			console.info("Connected to database 23");
			return this.connection;
		}
	};
}

const db = new Database();

exports.connection = db.getConnection();
// module.exports = new Database();
