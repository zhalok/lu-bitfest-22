const user_model = require("../models/user-schema");
const bcrypt = require("bcrypt");
const user_controller = {};
user_controller.add_user = async (req, res, next) => {
  const { name, contact, email, username, password, role, pickup, id_number } =
    req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  user_model.find({ id_number }, (err, data) => {
    if (err) next(err);
    else {
      if (data.length != 0) res.json("The user is already registered");
      else {
        const new_user = new user_model({
          name,
          contact,
          email,
          username,
          password: hashedPassword,
          role,
          id_number,
          pickup,
          verified: "Pending",
        });
        new_user.save((err, data) => {
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

user_controller.authentication = async (req, res, next) => {
  const { username, password } = req.body;

  user_model.find({ username }, (err, data) => {
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
              type: "user",
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

module.exports = user_controller;
