const express = require("express");
const auth = require("../middlewares/Authorization");
const user_controller = require("../controllers/user-controller");
const router = express.Router();
router.post("/add", auth, user_controller.add_user);
module.exports = router;
