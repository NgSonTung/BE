const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
  },
  { collection: "type" }
);

const Type = mongoose.model("type", typeSchema);

module.exports = Type;
