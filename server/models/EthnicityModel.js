const mongoose = require("mongoose");

const ethnicitySchema = new mongoose.Schema(
  {
    ethnicity: { type: String, required: true },
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
  { collection: "ethnicity" }
);

const Ethnicity = mongoose.model("ethnicity", ethnicitySchema);

module.exports = Ethnicity;
