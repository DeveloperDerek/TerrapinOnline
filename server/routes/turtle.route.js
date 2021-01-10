const turtleController = require("../controllers/turtle.controller");
const router = require("express").Router();

router.post("/create", turtleController.create);
router.get("/view/:id", turtleController.findOne);
router.get("/all", turtleController.findAll);
router.put("/update/:id", turtleController.update);
router.delete("/delete/:id", turtleController.delete);

module.exports = router;