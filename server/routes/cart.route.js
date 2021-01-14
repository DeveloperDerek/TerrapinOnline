const cartController = require("../controllers/cart.controller");
const jwtAuth = require("../configs/jwt");
const router = require("express").Router();

router.post("/create", jwtAuth, cartController.create);
router.post("/addToCart", jwtAuth, cartController.addToCart);
router.get("/view", jwtAuth, cartController.viewCart);

module.exports = router;