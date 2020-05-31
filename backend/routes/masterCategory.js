const express = require("express");
const MasterCategory = require("../models/masterCategory");

const router = express.Router();

router.get("/", (req, res) => {
  MasterCategory.find((err, masterCategories) => {
    if (err) {
      return res.send(err);
    }
    res.status(200).json(masterCategories);
  });
});

router.post("/", (req, res) => {
  newMasterCategory = new MasterCategory(req.body);
  newMasterCategory.save((err, masterCategory) => {
    if (err) {
      return res.send(err);
    }
    res.status(201).json(masterCategory);
  });
});

module.exports = router;
