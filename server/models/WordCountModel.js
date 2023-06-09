const mongoose = require("mongoose");

const wordCountSchema = new mongoose.Schema(
  {
    wordCount: { type: Number, required: true },
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
  { collection: "wordCount" }
);

const WordCount = mongoose.model("wordCount", wordCountSchema);

module.exports = WordCount;
