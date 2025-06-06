//importing and using express
const express = require("express");
//importing cors and allowing all requests
const cors = require("cors");
//importing mongoose
const mongoose = require("mongoose");
//importing and setting up bodyparser
const bodyParser = require("body-parser");

const app = express();

//importing and configuring dotenv
const env = require("dotenv");
env.config();
//assign port value
const port = process.env.PORT || 8080;
//temp middleware
app.use(express.json());

app.use(cors());

app.use(bodyParser.json()); // To parse JSON request
app.use(bodyParser.urlencoded({ extended: true })); //To parse form data

//import routes here

//import middlewares here (requestLogger, responseLogger, errorHandler)

//Home route setup
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running",
  });
});

//importing customerRoutes
const customerRoutes = require("./routes/customer");

//importing food routes
const foodRoutes = require("./routes/food");

//Setting up customer routes
app.use("/customer", customerRoutes);

//Setting up food routes
app.use("/food", foodRoutes);
//Add errorHandler middleware if needed

//running server on the selected port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);

  //connecting to database
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`Successfully connected to database`);
    })
    .catch((err) => {
      console.log(err);
    });
});
