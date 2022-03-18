const express = require("express");
// const EmailControllar = require("../controllers/product.controller");
const EmailControllar = require("../controllers/Email.controllar");

const router = express.Router();

router
	.route("/")
	.get(EmailControllar.onGetAll)
	.post(EmailControllar.onCreate);
	
router.route("/:id").get(EmailControllar.onGetById);
router.route("/id/:CategoryId").get(EmailControllar.onGetCategoryId);
// router.route('/delete/:id').delete(EmailControllar.ondelete)

module.exports = router;
