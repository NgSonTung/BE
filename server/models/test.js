const Type = require("./TypeModel");
const mongoose = require("mongoose");
run();
async function run() {
  try {
    mongoose
      .connect("mongodb://127.0.0.1:27017/NameGenerator")
      .then(console.log("Database connected!"))
      .catch((err) => console.log(err));

    Type.find({}).then((names) => {
      console.log(names);
    });
  } catch (e) {
    console.log(e);
  }
}
