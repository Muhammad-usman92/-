const express = require("express");
const CategoryControllar = require("../controllers/CategoryControllar");

const router = express.Router();

router.route("/").get(CategoryControllar.onGetAll)
router.route("/post")	.post(CategoryControllar.onCreate);
router.route("/:id").get(CategoryControllar.onGetById);
// router.route("/:CategoryId").get(CategoryControllar.onGetByCategryId);

module.exports = router;
