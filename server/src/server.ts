import dotenv from "dotenv";
import mongoose from "mongoose";
import App from "./app";

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DB;

mongoose
  .connect(`mongodb://127.0.0.1:27017/${DB}`)
  .then(() => console.log("Database connected!"))
  .catch((err: Error) => console.log(err));

const PORT = process.env.PORT;
const app = new App();
app.app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
