const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
dotenv.config({
  path: "./config.env",
});

const DB = process.env.DB;
console.log(`mongodb://127.0.0.1:27017/${DB}`);
mongoose
  .connect(`mongodb://127.0.0.1:27017/${DB}`)
  .then(console.log("Database connected!"))
  .catch((err) => console.log(err));

//START SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
