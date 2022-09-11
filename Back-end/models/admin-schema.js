const mongoose = require("mongoose");

const admin_schema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  verified: { type: String, required: true },
});

module.exports = mongoose.model("Admin", admin_schema);
