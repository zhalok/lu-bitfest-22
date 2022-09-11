const mongoose = require("mongoose");
const bus_route_schema = new mongoose.Schema({
  bus_id: { type: String, required: true },
  route_id: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model("Bus-route", bus_route_schema);
