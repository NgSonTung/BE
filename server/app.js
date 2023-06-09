const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const nameRouter = require("./routes/name");
const typeRouter = require("./routes/type");
const categoryRouter = require("./routes/category");
const genderRouter = require("./routes/gender");
const firstNameRouter = require("./routes/firstName");
const middleNameRouter = require("./routes/middleName");
const lastNameRouter = require("./routes/lastName");
const wordCountRouter = require("./routes/wordCount");
const ethnicityRouter = require("./routes/ethnicity");
const meaningRouter = require("./routes/meaning");
const userRouter = require("./routes/user");
const zodiacSignRouter = require("./routes/zodiacSign");
const zodiacAnimalRouter = require("./routes/zodiacAnimal");
const elementRouter = require("./routes/element");
const startsWithRouter = require("./routes/startsWith");
const endsWithRouter = require("./routes/endsWith");
// const testRouter = require("./routes/test");

if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.use("/api/v1/", testRouter);
app.use("/api/v1/name", nameRouter);
app.use("/api/v1/type", typeRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/gender", genderRouter);
app.use("/api/v1/firstName", firstNameRouter);
app.use("/api/v1/middleName", middleNameRouter);
app.use("/api/v1/lastName", lastNameRouter);
app.use("/api/v1/wordCount", wordCountRouter);
app.use("/api/v1/ethnicity", ethnicityRouter);
app.use("/api/v1/meaning", meaningRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/zodiacSign", zodiacSignRouter);
app.use("/api/v1/zodiacAnimal", zodiacAnimalRouter);
app.use("/api/v1/element", elementRouter);
app.use("/api/v1/startsWith", startsWithRouter);
app.use("/api/v1/endsWith", endsWithRouter);

module.exports = app;
