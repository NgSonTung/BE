const mongoose = require("mongoose");

const zodiacAnimalSchema = new mongoose.Schema(
  {
    zodiacAnimal: { type: String, required: true },
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
  { collection: "zodiacAnimal" }
);

const ZodiacAnimal = mongoose.model("zodiacAnimal", zodiacAnimalSchema);

module.exports = ZodiacAnimal;
