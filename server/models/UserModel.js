const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: Number, required: true },
  },
  { collection: "user" }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
