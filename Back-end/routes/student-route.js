const express = require("express");
const auth = require("../middlewares/Authorization");
const student_controller = require("../controllers/student-controller");
const router = express.Router();
router.post("/add", auth, student_controller.add);
router.get("/", auth, student_controller.get);
router.patch("/update", auth, student_controller.update);
module.exports = router;
