import dotenv from "dotenv";
import mongoose from "mongoose";
import { Name } from "../models/nameModel";
import { User } from "../models/userModel";
import { Category } from "../models/categoryModel";
import { Element } from "../models/elementModel";
import { Type } from "../models/typeModel";
import { Ethnicity } from "../models/ethnicityModel";
import { FirstName } from "../models/firstNameModel";
import { MiddleName } from "../models/middleNameModel";
import { LastName } from "../models/lastNameModel";
import { Gender } from "../models/genderModel";
import { Meaning } from "../models/meaningModel";
import { StartsWith } from "../models/startsWithModel";
import { EndsWith } from "../models/endsWithModel";
import { WordCount } from "../models/wordCountModel";
import { ZodiacAnimal } from "../models/zodiacAnimalModel";
import { ZodiacSign } from "../models/zodiacSignModel";
import fs from "fs";

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DB;

mongoose
  .connect(`mongodb://127.0.0.1:27017/${DB}`)
  .then(() => {
    console.log("Database connected!");
    createCollection();
  })
  .catch((err) => console.log(err));

const createCollection = () => {
  const categoryData = JSON.parse(fs.readFileSync("category.json", "utf8"));
  const elementData = JSON.parse(fs.readFileSync("element.json", "utf8"));
  const typeData = JSON.parse(fs.readFileSync("type.json", "utf8"));
  const ethnicityData = JSON.parse(fs.readFileSync("ethnicity.json", "utf8"));
  const firstNameData = JSON.parse(fs.readFileSync("firstName.json", "utf8"));
  const middleNameData = JSON.parse(fs.readFileSync("middleName.json", "utf8"));
  const lastNameData = JSON.parse(fs.readFileSync("lastName.json", "utf8"));
  const genderData = JSON.parse(fs.readFileSync("gender.json", "utf8"));
  const meaningData = JSON.parse(fs.readFileSync("meaning.json", "utf8"));
  const nameData = JSON.parse(fs.readFileSync("name.json", "utf8"));
  const startsWithData = JSON.parse(fs.readFileSync("startsWith.json", "utf8"));
  const endsWithData = JSON.parse(fs.readFileSync("endsWith.json", "utf8"));
  const userData = JSON.parse(fs.readFileSync("user.json", "utf8"));
  const wordCountData = JSON.parse(fs.readFileSync("wordCount.json", "utf8"));
  const zodiacAnimalData = JSON.parse(
    fs.readFileSync("zodiacAnimal.json", "utf8")
  );
  const zodiacSignData = JSON.parse(fs.readFileSync("zodiacSign.json", "utf8"));

  const collections = [
    { model: Category, data: categoryData },
    { model: Element, data: elementData },
    { model: Type, data: typeData },
    { model: Ethnicity, data: ethnicityData },
    { model: FirstName, data: firstNameData },
    { model: MiddleName, data: middleNameData },
    { model: LastName, data: lastNameData },
    { model: Gender, data: genderData },
    { model: Meaning, data: meaningData },
    { model: Name, data: nameData },
    { model: StartsWith, data: startsWithData },
    { model: EndsWith, data: endsWithData },
    { model: User, data: userData },
    { model: WordCount, data: wordCountData },
    { model: ZodiacAnimal, data: zodiacAnimalData },
    { model: ZodiacSign, data: zodiacSignData },
  ];

  for (const collection of collections) {
    const { model, data } = collection;
    model
      .insertMany(data)
      .then(() =>
        console.log(
          `Data imported into '${model.collection.collectionName}' collection`
        )
      )
      .catch((err) =>
        console.error(
          `Error importing data into '${model.collection.collectionName}' collection:`,
          err
        )
      );
  }
};
