const admin_model = require("../models/admin-model");
const bcrypt = require("bcrypt");
const adminModel = require("../models/admin-model");
const admin_controller = {};
admin_controller.add = async (req, res, next) => {
  const { name, contact, email, username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  admin_model.find({ username, email }, (err, data) => {
    if (err) next(err);
    else {
      if (data.length != 0) res.json("The user is already registered");
      else {
        const new_admin = new admin_model({
          name,
          contact,
          email,
          username,
          password: hashedPassword,
          role,
        });
        new_admin.save((err, data) => {
          if (err) {
            console.log("hello");
            next(err);
          } else res.json({ message: data });
        });
      }
    }
  });
};

admin_controller.verify = async (req, res, next) => {};

module.exports = admin_controller;
