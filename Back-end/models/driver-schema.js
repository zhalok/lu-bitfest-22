const mongoose = require("mongoose");

const driver_schema = new mongoose.Schema({
  name: { type: String, required: true },
  contact_number: { type: String, required: true },
});

module.exports = driver_schema;
