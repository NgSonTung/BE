const mongoose = require("mongoose");

const zodiacSignSchema = new mongoose.Schema(
  {
    zodiacSign: { type: String, required: true },
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
  { collection: "zodiacSign" }
);

const ZodiacSign = mongoose.model("zodiacSign", zodiacSignSchema);

module.exports = ZodiacSign;
