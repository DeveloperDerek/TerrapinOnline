const orderController = require("../controllers/order.controller");
const jwtAuth = require("../configs/jwt");
const router = require("express").Router();

router.post("/addOrderItem", jwtAuth, orderController.addOrderItems).get(jwtAuth, orderController.getOrders);
router.get("/getOrder", orderController.getOrders);

module.exports = router;