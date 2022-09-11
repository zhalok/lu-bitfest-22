const teacher_model = require("../models/teacher-schema");
const bcrypt = require("bcrypt");
const teacher_controller = {};
teacher_controller.add = async (req, res, next) => {
  const {
    name,
    contact,
    email,
    username,
    password,
    role,
    pickup,
    id_number,
    code_name,
    designation,
    department,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  teacher_model.find({ id_number }, (err, data) => {
    if (err) next(err);
    else {
      if (data.length != 0) res.json("The user is already registered");
      else {
        const new_teacher = new teacher_model({
          name,
          contact,
          email,
          username,
          password: hashedPassword,
          role,
          id_number,
          pickup,
          code_name,
          designation,
          department,
          verified: "Pending",
        });
        new_teacher.save((err, data) => {
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

teacher_controller.authentication = async (req, res, next) => {
  const { username, password } = req.body;

  teacher_model.find({ username }, (err, data) => {
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

teacher_controller.get = (req, res, next) => {
  teacher_model.find({}, (err, data) => {
    if (err) next(err);
    else res.status(200).json(data);
  });
};

teacher_controller.update = (req, res, next) => {
  const { field, value, _id } = req.body;

  if (["department", "code_name", "designation"].indexOf(field) == -1) {
    res.status(400).json({ message: "wrong update field" });
    return;
  }
  let updated_data = {};
  updated_data[field] = value;

  teacher_model.findByIdAndUpdate(
    { _id },
    updated_data,
    { new: true },
    (err, data) => {
      if (err) next(err);
      else {
        res.status(200).json(data);
      }
    }
  );
};

module.exports = teacher_controller;
