const mongoose = require("mongoose");

const masterCategorySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("MasterCategory", masterCategorySchema);
