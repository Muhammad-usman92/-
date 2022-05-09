const express = require("express");
const productController = require("../controllers/product.controller");
const ProductController = require("../controllers/product.controller");

const router = express.Router();

router.route("/")
	.get(ProductController.onGetAll);
router.route("/post")
	.post(ProductController.onCreate);
	router.route('/updateProductPrice').get(ProductController.onupdateProductPrice)
router.route("/:id").get(ProductController.onGetById);
router.route("/id/:CategoryId").get(ProductController.onGetCategoryId);
router.route('/delete/:id').delete(productController.ondelete)

module.exports = router;
