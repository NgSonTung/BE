import express, { Application } from "express";
import cors from "cors";
import cookiepParser from "cookie-parser";
import compression from "compression";
import authRouter from "./routes/authentication";
// import nameRouter from "./routes/name";
// import typeRouter from "./routes/type";
// import categoryRouter from "./routes/category";
// import genderRouter from "./routes/gender";
// import firstNameRouter from "./routes/firstName";
// import middleNameRouter from "./routes/middleName";
// import lastNameRouter from "./routes/lastName";
// import wordCountRouter from "./routes/wordCount";
// import ethnicityRouter from "./routes/ethnicity";
// import meaningRouter from "./routes/meaning";
// import userRouter from "./routes/user";
// import zodiacSignRouter from "./routes/zodiacSign";
// import zodiacAnimalRouter from "./routes/zodiacAnimal";
// import elementRouter from "./routes/element";
// import startsWithRouter from "./routes/startsWith";
// import endsWithRouter from "./routes/endsWith";

export default class App {
  app: Application;

  constructor() {
    this.app = express();
    this.#config();
    this.#routes();
  }

  #config(): void {
    this.app.use(compression());
    this.app.use(cookiepParser());
    this.app.use(cors({ credentials: true }));
    this.app.use(express.json());
  }
  #routes(): void {
    this.app.use("/api/v1/auth", authRouter);
    // this.app.use("/api/v1/name", nameRouter);
    // this.app.use("/api/v1/type", typeRouter);
    // this.app.use("/api/v1/category", categoryRouter);
    // this.app.use("/api/v1/gender", genderRouter);
    // this.app.use("/api/v1/firstName", firstNameRouter);
    // this.app.use("/api/v1/middleName", middleNameRouter);
    // this.app.use("/api/v1/lastName", lastNameRouter);
    // this.app.use("/api/v1/wordCount", wordCountRouter);
    // this.app.use("/api/v1/ethnicity", ethnicityRouter);
    // this.app.use("/api/v1/meaning", meaningRouter);
    // this.app.use("/api/v1/user", userRouter);
    // this.app.use("/api/v1/zodiacSign", zodiacSignRouter);
    // this.app.use("/api/v1/zodiacAnimal", zodiacAnimalRouter);
    // this.app.use("/api/v1/element", elementRouter);
    // this.app.use("/api/v1/startsWith", startsWithRouter);
    // this.app.use("/api/v1/endsWith", endsWithRouter);
  }
}
