const mongoose = require("mongoose");

const location_schema = new mongoose.Schema({
  label: { type: String, required: true },
  lattitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

module.exports = location_schema;
