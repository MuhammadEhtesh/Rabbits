const express = require("express");
const productRouter = require("./routes/product");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome from express App!");
});
app.use("/product", productRouter);

module.exports = app;
