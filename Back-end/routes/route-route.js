const express = require("express");
const route_controller = require("../controllers/route-controller");
const auth = require("../middlewares/Authorization");
const router = express.Router();
router.post("/create", auth, route_controller.create);
router.get("/read", auth, route_controller.read);
router.patch("/update", auth, route_controller.update);
router.delete("/delete/:id", auth, route_controller.delete);
router.get("/suggestion", auth, route_controller.suggest_route);

module.exports = router;
