const mongoose = require("mongoose");

const genderSchema = new mongoose.Schema(
  {
    gender: { type: String, required: true },
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
  { collection: "gender" }
);

const Gender = mongoose.model("gender", genderSchema);

module.exports = Gender;
