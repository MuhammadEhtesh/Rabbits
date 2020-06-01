const mongoose = require("mongoose");
const { Schema } = mongoose;

const masterCategorySchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("MasterCategory", masterCategorySchema);
