import { User } from "./UserModel.js";
import mongoose from "mongoose";
run();
async function run() {
  try {
    mongoose
      .connect("mongodb://127.0.0.1:27017/NameGenerator")
      .then(() => console.log("Database connected!"))
      .catch((err) => console.log(err));

    const user = await User.findOne({ userName: "admeieene" }).select(
      "+authentication.salt + authentication.password"
    );
    console.log(user);
  } catch (e) {
    console.log(e);
  }
}
