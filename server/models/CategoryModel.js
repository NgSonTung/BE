const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
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
  { collection: "category" }
);

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
