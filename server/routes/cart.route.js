const cartController = require("../controllers/cart.controller");
const jwtAuth = require("../configs/jwt");
const router = require("express").Router();

router.post("/addToCart", jwtAuth, cartController.addToCart);
router.get("/viewCart", jwtAuth, cartController.viewCart);

module.exports = router;