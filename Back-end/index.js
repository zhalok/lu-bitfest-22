const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const mongoose = require("mongoose");

const cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow_Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Zhalok:03041959@cluster0.5da7mxa.mongodb.net/?retryWrites=true&w=majority"
    // {
    //   useNewUrlParser: true,
    //   useFindAndModify: true,
    //   useCreateIndex: true,
    //   useUnifiedTopology: true,
    // }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const admin_route = require("./routes/admin-route");
const bus_route = require("./routes/bus-route");

app.all("/", (req, res, next) => {
  console.log("hello");
  res.json("Hello client");
});

app.use("/api/admin", admin_route);
app.use("/api/bus", bus_route);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code);
  res.json({ message: error.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(port);
});
