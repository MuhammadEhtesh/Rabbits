const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const ApiRoutes = require("./config/ApiRoutes");
const productRouter = require("./routes/product");
const masterCategoryRouter = require("./routes/masterCategory");

const app = express();
app.use(cors());
app.use(express.json());

// Mongodb Connection
mongoose
  .connect(config.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db Connected!");
  })
  .catch((err) => console.log(err));

// Welcome Message
app.get("/", (req, res) => {
  res.send("Welcome from express App!");
});

// Routes
app.use(ApiRoutes.Product, productRouter);
app.use(ApiRoutes.MasterCategory, masterCategoryRouter);

module.exports = app;
