const Sequelize = require("sequelize");

class Database {
	connection = null;

	getConnection = () => {
		if (!this.connection) {
			try {
				const temp = new Sequelize(
					process.env.DB_NAME,
					process.env.DB_USER,
					process.env.DB_PASS,
					{
						host: process.env.DB_HOST,
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

const connection = db.getConnection();
// module.exports = new Database();
