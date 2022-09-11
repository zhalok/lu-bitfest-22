const express = require("express");
const auth = require("../middlewares/teacher_authorization");
const teacher_controller = require("../controllers/teacher-controller");
const router = express.Router();
router.post("/add", auth, teacher_controller.add);
router.get("/", auth, teacher_controller.get);
router.patch("/update", auth, teacher_controller.update);
module.exports = router;
