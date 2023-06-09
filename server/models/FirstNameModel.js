const mongoose = require("mongoose");

const firstNameSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
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
  { collection: "firstName" }
);

const FirstName = mongoose.model("firstName", firstNameSchema);

module.exports = FirstName;
