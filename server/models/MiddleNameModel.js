const mongoose = require("mongoose");

const middleNameSchema = new mongoose.Schema(
  {
    middleName: { type: String, required: true },
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
  { collection: "middleName" }
);

const MiddleName = mongoose.model("middleName", middleNameSchema);

module.exports = MiddleName;
