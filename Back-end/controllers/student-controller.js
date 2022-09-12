const student_model = require("../models/student-schema");
const { generate_token } = require("../utils/Auth");
const bcrypt = require("bcrypt");
const student_controller = {};
student_controller.add = async (req, res, next) => {
  const {
    name,
    contact,
    email,
    username,
    password,
    role,
    pickup,
    id_number,
    batch,
    section,
    department,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  student_model.find({ id_number }, (err, data) => {
    if (err) next(err);
    else {
      if (data.length != 0) res.json("The user is already registered");
      else {
        const new_student = new student_model({
          name,
          contact,
          email,
          username,
          password: hashedPassword,
          role,
          id_number,
          pickup,
          batch,
          section,
          department,
          verified: "Pending",
        });
        new_student.save((err, data) => {
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

student_controller.authentication = async (req, res, next) => {
  const { username, password } = req.body;

  student_model.find({ username }, (err, data) => {
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
            const { name, contact, email, username, role, _id } = data[0];
            const token = generate_token({
              _id,
              name,
              contact,
              email,
              username,
              role,
              type: "student",
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

student_controller.get = (req, res, next) => {
  student_model.find({}, (err, data) => {
    if (err) next(err);
    else res.status(200).json(data);
  });
};

student_controller.get_by_id = (req, res, next) => {
  const { _id } = req.params;
  student_model.find({ _id }, (err, data) => {
    if (err) next(err);
    else res.status(200).json(data);
  });
};

student_controller.update = (req, res, next) => {
  const { field, value, _id } = req.body;

  if (["name", "batch", "section"].indexOf(field) == -1) {
    res.status(400).json({ message: "wrong update field" });
    return;
  }
  let updated_data = {};
  updated_data[field] = value;

  student_model.findByIdAndUpdate(
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

module.exports = student_controller;
