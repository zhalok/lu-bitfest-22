const express = require("express");
const bus_controller = require("../controllers/bus-controller");
const seat_auth = require("../middlewares/seat_authorization");
const auth = require("../middlewares/Authorization");
const router = express.Router();
router.post("/create", auth, bus_controller.create);
router.get("/read", auth, bus_controller.read);
router.patch("/update", auth, bus_controller.update);
router.delete("/delete/:id", auth, bus_controller.delete);
router.post("/request-seat", seat_auth, bus_controller.issue_seat);

module.exports = router;
