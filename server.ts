const express = require("express");

const app = express();

const port = 3000;

app.use("/", (req, res) => {
  res.send("Welcome from express app");
});

app.listen(port, (req, res) => {
  console.log(`server is listening on port ${port}`);
});
