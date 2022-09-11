const express = require("express");
const admin_controller = require("../controllers/admin-controller");
const router = express.Router();
router.post("/signup", admin_controller.add);
module.exports = router;
