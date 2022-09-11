const mongoose = require("mongoose");
const bus_schema = new mongoose.Schema({
  date: { type: String, required: true },
  number_of_classes: { type: Number, required: true },
  student_id: { type: String, required: true },
  // start_time: { type: String, required: true },
});

module.exports = mongoose.model("Bus", bus_schema);
