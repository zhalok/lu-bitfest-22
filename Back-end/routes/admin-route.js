const express = require("express");
const admin_controller = require("../controllers/admin-controller");
const router = express.Router();
router.post("/signup", admin_controller.add);
router.post("/login", admin_controller.authentication);
router.post("/authorization", admin_controller.authorization);
module.exports = router;
