const route_model = require("../models/route-schema");
const route_controller = {};
route_controller.create = (req, res, next) => {
  if (req.method != "POST") {
    res.status(405).json({ message: "Wrong method" });
    return;
  }
  const { route_number, start_location, start_time } = req.body;
  const new_route = new route_model({
    route_number,
    start_location,
    start_time,
    demand: {
      teachers: 0,
      students: 0,
      staffs: 0,
      others: 0,
    },
  });
  new_route.save((err, data) => {
    if (err) next(err);
    else {
      res.status(200).json(data);
    }
  });
};

route_controller.read = (req, res, next) => {
  route_model.find({}, (err, data) => {
    if (err) next(err);
    else {
      res.json(data);
    }
  });
};

route_controller.update = (req, res, next) => {
  if (req.method != "PATCH") {
    res.status(405).json({ message: "Wrong method" });
    return;
  }
  const { route_number, start_location, start_time, _id, demand } = req.body;

  route_model.findByIdAndUpdate(
    { _id },
    { route_number, start_location, start_time, demand },
    { new: true },
    (err, data) => {
      if (err) next(err);
      else res.status(200).json(data);
    }
  );
};

route_controller.delete = (req, res, next) => {
  if (req.method != "DELETE") {
    res.status(405).json({ message: "Wrong method" });
    return;
  }

  const { id } = req.params;

  route_model.findByIdAndDelete({ _id: id }, (err) => {
    if (err) next(err);
    else {
      res.status(200).json({ message: "Successfully Deleted" });
    }
  });
};

module.exports = route_controller;
