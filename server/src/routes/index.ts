import express, { Router } from "express";
import { register } from "../controllers/AuthenticationController";
import { getAllTypes } from "../controllers/TypeController";
import { getAllCategories } from "../controllers/CategoryController";
import { getAllGenders } from "../controllers/GenderController";
import { getAllFirstNames } from "../controllers/FirstNameController";
import { getAllMiddleNames } from "../controllers/MiddleNameController";
import { getAllLastNames } from "../controllers/LastNameController";
import {
  getAllWordCounts,
  getWordCountById,
} from "../controllers/WordCountController";
import { getAllNames } from "../controllers/NameController";
import { getAllEthnicities } from "../controllers/EthnicityController";
import { getAllMeanings } from "../controllers/MeaningController";
import { getAllUsers } from "../controllers/UserController";
import { getAllZodiacSigns } from "../controllers/ZodiacSignController";
import { getAllZodiacAnimals } from "../controllers/ZodiacAnimalController";
import { getAllElements } from "../controllers/ElementController";
import { getAllStartsWiths } from "../controllers/StartsWithController";
import { getAllEndsWiths } from "../controllers/EndsWithController";

const tableRouter: Router = express.Router();

tableRouter.route("/:tableName").get((req: any, res: any) => {
  const { tableName } = req.params;
  switch (tableName) {
    case "type":
      return getAllTypes(req, res);
    case "category":
      return getAllCategories(req, res);
    case "gender":
      return getAllGenders(req, res);
    case "firstName":
      return getAllFirstNames(req, res);
    case "middleName":
      return getAllMiddleNames(req, res);
    case "lastName":
      return getAllLastNames(req, res);
    case "wordCount":
      return getAllWordCounts(req, res);
    case "name":
      return getAllNames(req, res);
    case "ethnicity":
      return getAllEthnicities(req, res);
    case "meaning":
      return getAllMeanings(req, res);
    case "user":
      return getAllUsers(req, res);
    case "zodiacSign":
      return getAllZodiacSigns(req, res);
    case "zodiacAnimal":
      return getAllZodiacAnimals(req, res);
    case "element":
      return getAllElements(req, res);
    case "startsWith":
      return getAllStartsWiths(req, res);
    case "endsWith":
      return getAllEndsWiths(req, res);
  }
  return;
});
export default tableRouter;
