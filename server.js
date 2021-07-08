// endpoints

const apiUrl = "api.coingecko.com/api/v3";
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const server = express();

server.use(cors());
server.use(express.json({}));
// server.use(express.static("static"));

// this is where we will do our own middleware
server.use((req, res, next) => {
  console.log(
    "Time: ",
    Date.now(),
    " - Method: ",
    req.method,
    " - Path: ",
    req.originalUrl,
    " - Body: ",
    req.body
  );
  next();
});

// get all threads (filter by category if present)
server.get(`/doge`, (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  console.log("Getting the doge");
  fetch(`http://api.coingecko.com/api/v3/coins/dogecoin`).then(function (
    response
  ) {
    response.json().then(function (data) {
      res.status(200).json(data);
    });
  });
});

module.exports = server;
