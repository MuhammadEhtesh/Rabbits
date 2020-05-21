const express = require("express");
const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Welcome from express App!");
});

module.exports = app;
