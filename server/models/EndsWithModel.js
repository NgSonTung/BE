const mongoose = require("mongoose");

const endsWithSchema = new mongoose.Schema(
  {
    endsWith: { type: String, required: true },
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
  { collection: "endsWith" }
);

const EndsWith = mongoose.model("endsWith", endsWithSchema);

module.exports = EndsWith;
