const mongoose = require("mongoose");

const student_schema = new mongoose.Schema({
  name: { type: String, required: true },
  id_number: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  pickup: { type: String, required: true },
  batch: { type: Number, required: true },
  section: { type: String, required: true },
});

module.exports = mongoose.model("Students", student_schema);
