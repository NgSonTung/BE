const mongoose = require("mongoose");

const elementSchema = new mongoose.Schema(
  {
    element: { type: String, required: true },
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
  { collection: "element" }
);

const Element = mongoose.model("element", elementSchema);

module.exports = Element;
