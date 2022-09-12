const bus_model = require("../models/bus-schema");
const seat_model = require("../models/seat-schema");
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

bus_controller.issue_seat = async (req, res, next) => {
  try {
    const { bus_id, consumer_id, journey_time } = req.body;

    const buses = await bus_model.find({ _id: bus_id, is_active: true });
    if (buses.length == 0) {
      res
        .status(200)
        .json({ message: "The bus you asked for is currently not active" });
    } else {
      const bus = buses[0];
      if (bus.capacity > 0) {
        bus.capacity--;
        const new_seat = new seat_model({
          bus_id,
          consumer_id,
          journey_time,
        });
        const new_seat_data = await new_seat.save();
        bus_model.findByIdAndUpdate({ _id: bus_id }, bus);
        res.status(200).json(new_seat_data);
      }
    }
  } catch (e) {
    next(e);
  }
};

bus_controller.get_approximate_time = (req, res, next) => {
  const { bus_id, stu_x, stu_y } = req.body;
  // as it is currently not possible to use the google api due to payment issue we are assuming a bus location for that
  const busx = Math.random() * 6000 - 3000;
  const busy = Math.random() * 6000 - 3000;
  const bus_speed = 50;
  const distance =
    (busx - stu_x) * (busx - stu_x) + (busy - stu_y) * (busy - stu_y);
  const estimated_time = distance / bus_speed / 60;
  res.status(200).json({ message: "Time needed is " + estimated_time });
};

module.exports = bus_controller;
