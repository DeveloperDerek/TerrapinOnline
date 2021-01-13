const userController = require("../controllers/user.controller");
const jwtAuth = require("../configs/jwt");
const router = require("express").Router();

router.post("/register", userController.register);

router.get("/getall", userController.getAll);
// router.get("/user/:id", userController.getOne);
router.delete("/delete/:id", userController.delete);
router.put("/update/:id", userController.update);

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/login_check", userController.login_check);

module.exports = router;