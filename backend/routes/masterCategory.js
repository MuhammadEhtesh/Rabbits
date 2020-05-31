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

router.get("/:id", (req, res) => {
  MasterCategory.findById(req.params.id, (err, masterCategory) => {
    if (err) {
      return res.send(err);
    }
    res.status(200).json(masterCategory);
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

router.put("/", (req, res) => {
  const masterCategory = req.body;
  MasterCategory.updateOne(
    { _id: masterCategory._id },
    { name: masterCategory.name },
    (err, masterCategory) => {
      if (err) {
        return res.send(err);
      }
      res.json(masterCategory);
    }
  );
});

router.delete("/:id", (req, res) => {
  MasterCategory.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(404).send(err);
    }

    res.sendStatus(204);
  });
});

module.exports = router;
