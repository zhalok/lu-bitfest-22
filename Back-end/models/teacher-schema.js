const mongoose = require("mongoose");

const teacher_schema = new mongoose.Schema({
  name: { type: String, required: true },
  id_number: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  pickup: { type: String, required: true },
  code_name: { type: Number, required: true },
  designation: { type: String, required: true },
  department: { type: String, required: true },
});

module.exports = mongoose.model("Teachers", teacher_schema);
