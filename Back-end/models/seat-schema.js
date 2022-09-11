const mongoose = require("mongoose");

const seat_schema = new mongoose.Schema({
  bus_id: { type: String, required: true },
  consumer_id: { type: String, required: true },
  journey_time: { type: String, required: true },
});

module.exports = mongoose.model("Seat", seat_schema);
