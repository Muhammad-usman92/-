const Sequelize = require("sequelize");

class Database {
	connection = null;

	getConnection = () => {
		if (!this.connection) {
			try {
				const temp = new Sequelize(
					"sys",
					"root" ,
					"Az_qa_03",
					{
						host: "127.0.0.1",
						dialect: "mysql",
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
