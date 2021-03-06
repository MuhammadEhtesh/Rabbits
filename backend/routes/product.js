const express = require("express");
const multer = require("multer");
const Product = require("../models/product");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./backend/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({ storage: storage });
const router = express.Router();

router.get("/", (req, res) => {
  Product.find((err, products) => {
    if (err) {
      return res.send(err);
    }
    res.json(products);
  });
});

router.get("/:id", (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      return res.status(404).send(err);
    }
    res.status(200).json(product);
  });
});

router.post("/", upload.single("image"), (req, res) => {
  const product = new Product(req.body);
  product.image = req.file.originalname;
  product.save((err, product) => {
    if (err) {
      return res.send(err);
    }
    res.json(product);
  });
});

router.put("/", (req, res) => {
  const product = req.body;
  Product.updateOne(
    { _id: product._id },
    { name: product.name, price: product.price, image: product.image },
    (err, product) => {
      if (err) {
        return res.send(err);
      }
      res.json(product);
    }
  );
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.body.id, (err, product) => {
    if (err) {
      return res.send(err);
    }
    res.status(204).json(product);
  });
});

module.exports = router;
