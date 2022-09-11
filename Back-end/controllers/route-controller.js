const route_model = require("../models/route-schema");
const bus_model = require("../models/bus-schema");
const class_routine_model = require("../models/class-routine-schema");
const student_model = require("../models/student-schema");
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

    demand: {
      teachers: 0,
      students: 0,
      staffs: 0,
      others: 0,
    },
    start_time,
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

route_controller.suggest_route = async (req, res, next) => {
  const buses = await bus_model.find({});
  const routes = await route_model.find({});
  buses.sort((a, b) => a.capacity - b.capacity);

  const suggestions = [];
  for (let i = 0; i < routes.length; i++) {
    const number_of_teachers = routes[i].demand[0].teachers;
    const number_of_students = routes[i].demand[0].students;
    const number_of_staffs = routes[i].demand[0].staffs;
    const number_of_others = routes[i].demand[0].others;

    let passengers = [
      { type: "teacher", number: number_of_teachers },
      { type: "students", number: number_of_students },
      { type: "staffs", number: number_of_staffs },
      { type: "others", number: number_of_others },
    ];
    const suggestion = [];
    passengers.sort((a, b) => b.number - a.number);
    buses.sort((a, b) => b.capacity - a.capacity);

    for (let j = 0; j < passengers.length; j++) {
      for (let k = 0; k < buses.length; k++) {
        if (
          passengers[j].number <= buses[k].capacity &&
          buses[k].is_active == true
        ) {
          let obj = {};
          obj[passengers[j].type] = buses[k];

          console.log(obj);
          suggestion.push(obj);
          buses[k].is_active = false;
          break;
        }
      }
    }
    suggestions.push({ route: routes[i], suggestion });
  }
  res.status(200).json(suggestions);
};

module.exports = route_controller;
