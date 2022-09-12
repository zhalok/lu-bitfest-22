const fs = require("fs");
// require("./dummy_dataset");
const create_students = () => {
  const departments = [
    "CSE",
    "EEE",
    "Civil",
    "Architecutre",
    "BBA",
    "English",
    "Law",
  ];
  const batches = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
  const names = ["Riddhi", "TIthi", "Mahdi", "Tondra"];
  const sections = ["A", "B", "C"];
  const students = [];
  for (let i = 0; i < 100000; i++) {
    const dept_idx = Math.floor(Math.random() * departments.length);
    const batch_idx = Math.floor(Math.random() * batches.length);
    const section_idx = Math.floor(Math.random() * sections.length);
    const name_idx = Math.floor(Math.random() * names.length);
    const student_obj = {};
    student_obj["name"] = names[name_idx];
    student_obj["batch"] = batches[batch_idx];
    student_obj["deptartment"] = departments[dept_idx];
    student_obj["section"] = sections[section_idx];
    student_obj["id_number"] = Math.floor(
      Math.random(300000 - 200000) + 200000
    ).toString();
    student_obj["email"] = names[name_idx] + "@gmail.com";
    student_obj["pickup"] = "Varsity Gate";
    students.push(student_obj);
  }
  //   console.log(__dirname);
  fs.writeFileSync(
    `${__dirname}/dummy_dataset/student.json`,
    JSON.stringify(students)
  );
};

const create_routes = () => {
  const routes = [];
  for (let i = 0; i < 4; i++) {
    let route_number = Math.floor(Math.random() * 1000);
    let start_position_x = Math.random() * 2000 - 1000;
    let start_position_y = Math.random() * 2000 - 1000;
    let teachers = Math.floor(Math.random() * 1000);
    let students = Math.floor(Math.random() * 1000);
    let staffs = Math.floor(Math.random() * 1000);
    const start_position = {};
    start_position["lattitude"] = start_position_x;
    start_position["longitude"] = start_position_y;
    const demand = {};
    demand["teachers"] = teachers;
    demand["students"] = students;
    demand["staffs"] = staffs;
    const route = {};
    route["route_number"] = route_number;
    route["start_location"] = start_position;
    route["demand"] = demand;
    route["start_time"] = `${Math.floor(Math.random() * 24)}:00 AM`;
    routes.push(route);
  }
  fs.writeFileSync(
    `${__dirname}/dummy_dataset/routes.json`,
    JSON.stringify(routes)
  );
};

const create_busses = () => {
  const buses = [];
  for (let i = 0; i < 10; i++) {
    const license_number = Math.floor(
      Math.random() * (500000 - 100000) + 100000
    );
    const codenames = ["HULU", "KULU", "MULU"];
    const driver_names = ["Kuddus", "Kamal", "Jamal"];
    const codename = codenames[Math.floor(Math.random() * 2)];
    const driver_name = driver_names[Math.floor(Math.random() * 2)];
    const driver_contact = "017*******";
    const driver = {};
    driver["name"] = driver_name;
    driver["contact"] = driver_contact;
    const bus = {};
    bus["license_number"] = license_number;
    bus["codename"] = codename;
    bus["driver"] = driver;
    bus["is_active"] = Math.floor(Math.random()) ? true : false;
    buses.push(bus);
  }
  fs.writeFileSync(
    `${__dirname}/dummy_dataset/buses.json`,
    JSON.stringify(buses)
  );
};

const create_teachers = () => {
  const departments = [
    "CSE",
    "EEE",
    "Civil",
    "Architecutre",
    "BBA",
    "English",
    "Law",
  ];
  const names = ["Riddhi", "TIthi", "Mahdi", "Tondra"];
  const designations = ["Professor", "Lecturer", "Assistant professor"];
  const students = [];
  for (let i = 0; i < 100000; i++) {
    const dept_idx = Math.floor(Math.random() * departments.length);
    // const batch_idx = Math.floor(Math.random() * batches.length);
    const desination_idx = Math.floor(Math.random() * designations.length);
    const name_idx = Math.floor(Math.random() * names.length);
    const student_obj = {};
    student_obj["name"] = names[name_idx];
    student_obj["code_name"] = names[name_idx].substring(0, 3).toUpperCase();
    student_obj["deptartment"] = departments[dept_idx];
    student_obj["designation"] = designations[desination_idx];
    student_obj["id_number"] = Math.floor(
      Math.random(300000 - 200000) + 200000
    ).toString();
    student_obj["email"] = names[name_idx] + "@gmail.com";
    student_obj["pickup"] = "Varsity Gate";
    students.push(student_obj);
  }
  //   console.log(__dirname);
  fs.writeFileSync(
    `${__dirname}/dummy_dataset/teachers.json`,
    JSON.stringify(students)
  );
};

// create_routes();
// create_busses();
create_teachers();
