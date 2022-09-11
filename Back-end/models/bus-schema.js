const mongoose = require("mongoose");
const driver_schema = require("./driver-schema");
const bus_schema = new mongoose.Schema({
  license_number: { type: String, required: true },
  codename: { type: String, required: true },
  capacity: { type: Number, required: true },
  driver: [driver_schema],
  is_active: { type: Boolean, required: true },
});

module.exports = mongoose.model("Bus", bus_schema);
