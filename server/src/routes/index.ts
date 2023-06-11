import { isAuthenticated } from "./../middlewares/index";
import express, { NextFunction, Router } from "express";
import { login, register } from "../controllers/authenticationController";
import { getAllTypes } from "../controllers/typeController";
import { getAllCategories } from "../controllers/categoryController";
import { getAllGenders } from "../controllers/genderController";
import { getAllFirstNames } from "../controllers/firstNameController";
import { getAllMiddleNames } from "../controllers/middleNameController";
import { getAllLastNames } from "../controllers/lastNameController";
import { getAllWordCounts } from "../controllers/wordCountController";
import { getAllNames } from "../controllers/nameController";
import { getAllEthnicities } from "../controllers/ethnicityController";
import { getAllMeanings } from "../controllers/meaningController";
import { getAllUsers } from "../controllers/userController";
import { getAllZodiacSigns } from "../controllers/zodiacSignController";
import { getAllZodiacAnimals } from "../controllers/zodiacAnimalController";
import { getAllElements } from "../controllers/elementController";
import { getAllStartsWiths } from "../controllers/startsWithController";
import { getAllEndsWiths } from "../controllers/endsWithController";
import { getAllCollections } from "../controllers/collectionController";

const collectionRouter: Router = express.Router();

collectionRouter
  .route("/:collectionName")
  .get(async (req: any, res: any, next: NextFunction) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "collection":
        await isAuthenticated(req, res, next);
        if (!res.headersSent) {
          await getAllCollections(req, res);
        }
        break;
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
export default collectionRouter;
