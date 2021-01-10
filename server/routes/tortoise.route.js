const tortoiseController = require("../controllers/tortoise.controller");
const router = require("express").Router();

router.post("/create", tortoiseController.create);
router.get("/view/:id", tortoiseController.findOne);
router.get("/all", tortoiseController.findAll);
router.put("/update/:id", tortoiseController.update);
router.delete("/delete/:id", tortoiseController.delete);

module.exports = router;