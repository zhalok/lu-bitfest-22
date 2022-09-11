const admin_model = require("../models/admin-schema");
const bcrypt = require("bcrypt");
const { generate_token, validate_token } = require("../utils/Auth");
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
          verified: "Pending",
        });
        new_admin.save((err, data) => {
          if (err) {
            next(err);
          } else {
            res.json({ message: data });
          }
        });
      }
    }
  });
};

admin_controller.authentication = async (req, res, next) => {
  const { username, password } = req.body;
  // console.log(username);
  admin_model.find({ username }, (err, data) => {
    if (err) {
      next(err);
      return;
    }
    if (data.length === 0)
      res.status(401).json({ message: "Username Not Found" });
    else {
      const hashed_password = data[0].password;

      bcrypt.compare(password, hashed_password, (err, validity) => {
        if (err) next(err);
        else {
          if (validity) {
            const { name, contact, email, username, role } = data[0];
            const token = generate_token({
              name,
              contact,
              email,
              username,
              role,
              type: "Admin",
            });
            res.status(200).json({ message: "User Authenticated", token });
          } else {
            res.status(401).json({ message: "User Unauthenticated" });
          }
        }
      });
    }
  });
};

admin_controller.authorization = async (req, res, next) => {
  const token = req.headers.bearer;

  const decoded_token = validate_token(token);

  if (decoded_token) res.status(200).json({ message: "Token Authorized" });
  else res.status(401).json({ message: "Unauthorized token" });
};

module.exports = admin_controller;
