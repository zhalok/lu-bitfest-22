const mongoose = require("mongoose");
const location_schema = require("./location-schema");
const route_schema = new mongoose.Schema({
  route_number: { type: String, required: true },
  start_location: {
    type: [location_schema],
    required: true,
  },
  start_time: { type: String, required: true },
});

module.exports = mongoose.model("Route", route_schema);
