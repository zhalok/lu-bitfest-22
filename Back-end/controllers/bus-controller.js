const bus_model = require("../models/bus-schema");
const bus_controller = {};
bus_controller.create = (req, res, next) => {
  if (req.method != "POST") {
    res.status(405).json({ message: "Wrong method" });
    return;
  }
  const { license_number, codename, capacity, driver_info, is_active } =
    req.body;
  const new_bus = new bus_model({
    license_number,
    codename,
    capacity,
    driver_info,
    is_active,
  });
  new_bus.save((err, data) => {
    if (err) next(err);
    else {
      res.status(200).json(data);
    }
  });
};

bus_controller.read = (req, res, next) => {
  bus_model.find({}, (err, data) => {
    if (err) next(err);
    else {
      res.json(data);
    }
  });
};

bus_controller.update = (req, res, next) => {
  if (req.method != "PATCH") {
    res.status(405).json({ message: "Wrong method" });
    return;
  }
  const { license_number, codename, capacity, driver_info, is_active, _id } =
    req.body;
  bus_model.findOneAndUpdate(
    { _id },

    { license_number, codename, capacity, driver_info, is_active },
    { new: true },
    (err, data) => {
      if (err) next(err);
      else res.status(200).json(data);
    }
  );
};

bus_controller.delete = (req, res, next) => {
  if (req.method != "DELETE") {
    res.status(405).json({ message: "Wrong method" });
    return;
  }
  const { id } = req.params;

  bus_model.findByIdAndDelete({ _id: id }, (err) => {
    if (err) next(err);
    else {
      res.status(200).json({ message: "Successfully Deleted" });
    }
  });
};

module.exports = bus_controller;
