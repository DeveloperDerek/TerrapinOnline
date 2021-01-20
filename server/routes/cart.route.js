const cartController = require("../controllers/cart.controller");
const jwtAuth = require("../configs/jwt");
const router = require("express").Router();

router.post("/addToCart", jwtAuth, cartController.addToCart);
router.post("/removeFromCart", jwtAuth, cartController.removeFromCart);
router.get("/view", jwtAuth, cartController.viewCart);
router.get("/viewcart/:id", cartController.viewCartID);

module.exports = router;