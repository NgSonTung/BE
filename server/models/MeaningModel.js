const mongoose = require("mongoose");

const meaningSchema = new mongoose.Schema(
  {
    meaning: { type: String, required: true },
    typeId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "type",
        },
      ],
      required: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "typeId is required!",
      },
    },
  },
  { collection: "meaning" }
);

const Meaning = mongoose.model("meaning", meaningSchema);

module.exports = Meaning;
