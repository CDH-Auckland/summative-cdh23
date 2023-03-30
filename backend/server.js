const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();
const port = 4000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

//MongoDB server
mongoose.connect(process.env.DB_URL).catch((error) => {
  console.log(error);
});

mongoose.connection.on("connected", () => {
  console.log("connected to database");
  server.listen(port, () => {
    console.log("server listening on http://localhost:" + port);
  });
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});
