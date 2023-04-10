const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require('./routes/user');

const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



// routes
app.use('/api/user', userRoutes);


//MongoDB server
mongoose.connect(process.env.DB_URL).catch((error) => {
  console.log(error);
});

mongoose.connection.on("connected", () => {
  console.log("connected to database");
  app.listen(port, () => {
    console.log("server listening on http://localhost:" + port);
  });
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});
