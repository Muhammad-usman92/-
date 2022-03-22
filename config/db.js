const Sequelize = require("sequelize");

class Database {
	connection = null;

	getConnection = () => {
		if (!this.connection) {
			try {
				const temp = new Sequelize(
					"heroku_daeffbb09083934",
					"b1eb803eec620d" ,
					"71502629",
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
