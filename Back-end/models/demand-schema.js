const mongoose = require("mongoose");
const demand_schema = new mongoose.Schema({
  teachers: { type: Number, required: true },
  students: { type: Number, required: true },
  staffs: { type: Number, required: true },
  others: { type: Number, required: true },
});

module.exports = demand_schema;
