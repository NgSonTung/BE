const mongoose = require("mongoose");

const startsWithSchema = new mongoose.Schema(
  {
    startsWith: { type: String, required: true },
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
  { collection: "startsWith" }
);

const StartsWith = mongoose.model("startsWith", startsWithSchema);

module.exports = StartsWith;
