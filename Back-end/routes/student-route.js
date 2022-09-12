const express = require("express");
const auth = require("../middlewares/student_authorization");
const student_controller = require("../controllers/student-controller");
const router = express.Router();
router.post("/signup", student_controller.add);
router.get("/", auth, student_controller.get);
router.get("/:_id", auth, student_controller.get_by_id);

router.patch("/update", auth, student_controller.update);
router.post("/login", student_controller.authentication);
module.exports = router;
