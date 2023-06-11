import express, { Application } from "express";
import cors from "cors";
import cookiepParser from "cookie-parser";
import compression from "compression";
import router from "./routes/";
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
    this.app.use("/api/v1/", router);
  }

  #config(): void {
    this.app.use(compression());
    this.app.use(cookiepParser());
    this.app.use(cors({ credentials: true }));
    this.app.use(express.json());
  }
}
