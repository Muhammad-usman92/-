const nodemailer = require("nodemailer");

function sendMail(next) {
	const mailTransporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.SENDER_EMAIL,
			pass: process.env.SENDER_PASS,
		},
	});

	const details = {
		from: process.env.SENDER_EMAIL,
		to: process.env.RECEIVER_EMAIL,
		subject: "Testing nodemailer",
		text: "Hello world",
	};

	mailTransporter.sendMail(details, (err) => {
		if (err) {
			next(err);
		}
	});
}

module.exports = sendMail;
