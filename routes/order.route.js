const express = require("express");
const OrderController = require("../controllers/order.controller");
const ShippingAddress=require("../controllers/ShippingControllar")
const OrderItemControllar=require("../controllers/OrderItemControllar");
const orderController = require("../controllers/order.controller");

const router = express.Router();

router.route("/").get(OrderController.onGetAll).post(OrderController.onCreate);
router.route("/:id").get(OrderController.onGetById);
router.route("/id/:orderId").get(ShippingAddress.onGetCategoryId);
router.route("/orderItem/:orderId").get(OrderItemControllar.onGetCategoryId);
router.route('/delete/:id').delete(orderController.ondelete)


//  http://localhost:8080/api/v1/order/orderItem/162 => order Item api

module.exports = router;
