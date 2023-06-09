const mongoose = require("mongoose");

const lastNameSchema = new mongoose.Schema(
  {
    lastName: { type: String, required: true },
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
  { collection: "lastName" }
);

const LastName = mongoose.model("lastName", lastNameSchema);

module.exports = LastName;
