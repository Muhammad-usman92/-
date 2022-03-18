const Email = require("../models/Email.modal");

class EmailService {
	getAll = async () => await Email.findAll();
	getById = async (id) => await Email.findOne({ where: { id } });
	create = async (data) => await Email.create(data);
	update = () => {};
	delete = () => {};
}

module.exports = new EmailService();


// another changes

