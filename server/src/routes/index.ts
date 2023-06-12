import { isAuthenticated, isAdmin } from "./../middlewares/index";
import express, { Request, Response, Router } from "express";
import { login, register } from "../controllers/authenticationController";
import {
  addType,
  deleteAllTypes,
  deleteTypeById,
  getAllTypes,
  getTypeById,
  updateTypeById,
} from "../controllers/typeController";
import {
  addCategory,
  deleteAllCategories,
  deleteCategoryById,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
} from "../controllers/categoryController";
import {
  addGender,
  deleteAllGenders,
  deleteGenderById,
  getAllGenders,
  getGenderById,
  updateGenderById,
} from "../controllers/genderController";
import {
  addFirstName,
  deleteAllFirstNames,
  deleteFirstNameById,
  getAllFirstNames,
  getFirstNameById,
  updateFirstNameById,
} from "../controllers/firstNameController";
import {
  addMiddleName,
  deleteAllMiddleNames,
  deleteMiddleNameById,
  getAllMiddleNames,
  getMiddleNameById,
  updateMiddleNameById,
} from "../controllers/middleNameController";
import {
  addLastName,
  deleteAllLastNames,
  deleteLastNameById,
  getAllLastNames,
  getLastNameById,
  updateLastNameById,
} from "../controllers/lastNameController";
import {
  addWordCount,
  deleteAllWordCounts,
  deleteWordCountById,
  getAllWordCounts,
  getWordCountById,
  updateWordCountById,
} from "../controllers/wordCountController";
import {
  addName,
  deleteAllNames,
  deleteNameById,
  getAllNames,
  getNameById,
  updateNameById,
} from "../controllers/nameController";
import {
  addEthnicity,
  deleteAllEthnicities,
  deleteEthnicityById,
  getAllEthnicities,
  getEthnicityById,
  updateEthnicityById,
} from "../controllers/ethnicityController";
import {
  addMeaning,
  deleteAllMeanings,
  deleteMeaningById,
  getAllMeanings,
  getMeaningById,
  updateMeaningById,
} from "../controllers/meaningController";
import {
  addUser,
  deleteAllUsers,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controllers/userController";
import {
  addZodiacSign,
  deleteAllZodiacSigns,
  deleteZodiacSignById,
  getAllZodiacSigns,
  getZodiacSignById,
  updateZodiacSignById,
} from "../controllers/zodiacSignController";
import {
  addZodiacAnimal,
  deleteAllZodiacAnimals,
  deleteZodiacAnimalById,
  getAllZodiacAnimals,
  getZodiacAnimalById,
  updateZodiacAnimalById,
} from "../controllers/zodiacAnimalController";
import {
  addElement,
  deleteAllElements,
  deleteElementById,
  getAllElements,
  getElementById,
  updateElementById,
} from "../controllers/elementController";
import {
  addStartsWith,
  deleteAllStartsWiths,
  deleteStartsWithById,
  getAllStartsWiths,
  getStartsWithById,
  updateStartsWithById,
} from "../controllers/startsWithController";
import {
  addEndsWith,
  deleteAllEndsWiths,
  deleteEndsWithById,
  getAllEndsWiths,
  getEndsWithById,
  updateEndsWithById,
} from "../controllers/endsWithController";
import { getAllCollections } from "../controllers/collectionController";

const collectionRouter: Router = express.Router();

collectionRouter.route("/auth/register").post(register);
collectionRouter.route("/auth/login").post(login);

collectionRouter
  .get("/:collectionName", async (req: Request, res: Response) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "collection":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await getAllCollections(req, res));
        break;
      case "type":
        getAllTypes(req, res);
        break;
      case "category":
        getAllCategories(req, res);
        break;
      case "gender":
        getAllGenders(req, res);
        break;
      case "firstName":
        getAllFirstNames(req, res);
        break;
      case "middleName":
        getAllMiddleNames(req, res);
        break;
      case "lastName":
        getAllLastNames(req, res);
        break;
      case "wordCount":
        getAllWordCounts(req, res);
        break;
      case "name":
        getAllNames(req, res);
        break;
      case "ethnicity":
        getAllEthnicities(req, res);
        break;
      case "meaning":
        getAllMeanings(req, res);
        break;
      case "user":
        getAllUsers(req, res);
        break;
      case "zodiacSign":
        getAllZodiacSigns(req, res);
        break;
      case "zodiacAnimal":
        getAllZodiacAnimals(req, res);
        break;
      case "element":
        getAllElements(req, res);
        break;
      case "startsWith":
        getAllStartsWiths(req, res);
        break;
      case "endsWith":
        getAllEndsWiths(req, res);
        break;
    }
  })
  .get("/:collectionName/:id", async (req: Request, res: Response) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "type":
        getTypeById(req, res);
        break;
      case "category":
        getCategoryById(req, res);
        break;
      case "gender":
        getGenderById(req, res);
        break;
      case "firstName":
        getFirstNameById(req, res);
        break;
      case "middleName":
        getMiddleNameById(req, res);
        break;
      case "lastName":
        getLastNameById(req, res);
        break;
      case "wordCount":
        getWordCountById(req, res);
        break;
      case "name":
        getNameById(req, res);
        break;
      case "ethnicity":
        getEthnicityById(req, res);
        break;
      case "meaning":
        getMeaningById(req, res);
        break;
      case "user":
        getUserById(req, res);
        break;
      case "zodiacSign":
        getZodiacSignById(req, res);
        break;
      case "zodiacAnimal":
        getZodiacAnimalById(req, res);
        break;
      case "element":
        getElementById(req, res);
        break;
      case "startsWith":
        getStartsWithById(req, res);
        break;
      case "endsWith":
        getEndsWithById(req, res);
        break;
    }
  })
  .delete("/:collectionName", async (req: Request, res: Response) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "type":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllTypes(req, res);
        break;
      case "category":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllCategories(req, res);
        break;
      case "gender":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllGenders(req, res);
        break;
      case "firstName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllFirstNames(req, res);
        break;
      case "middleName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllMiddleNames(req, res);
        break;
      case "lastName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllLastNames(req, res);
        break;
      case "wordCount":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllWordCounts(req, res);
        break;
      case "name":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllNames(req, res);
        break;
      case "ethnicity":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllEthnicities(req, res);
        break;
      case "meaning":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllMeanings(req, res);
        break;
      case "user":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllUsers(req, res);
        break;
      case "zodiacSign":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllZodiacSigns(req, res);
        break;
      case "zodiacAnimal":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllZodiacAnimals(req, res);
        break;
      case "element":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllElements(req, res);
        break;
      case "startsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllStartsWiths(req, res);
        break;
      case "endsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteAllEndsWiths(req, res);
        break;
    }
  })
  .delete("/:collectionName/:id", async (req: Request, res: Response) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "type":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteTypeById(req, res);
        break;
      case "category":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteCategoryById(req, res);
        break;
      case "gender":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteGenderById(req, res);
        break;
      case "firstName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteFirstNameById(req, res);
        break;
      case "middleName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteMiddleNameById(req, res);
        break;
      case "lastName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteLastNameById(req, res);
        break;
      case "wordCount":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteWordCountById(req, res);
        break;
      case "name":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteNameById(req, res);
        break;
      case "ethnicity":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteEthnicityById(req, res);
        break;
      case "meaning":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteMeaningById(req, res);
        break;
      case "user":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteUserById(req, res);
        break;
      case "zodiacSign":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteZodiacSignById(req, res);
        break;
      case "zodiacAnimal":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteZodiacAnimalById(req, res);
        break;
      case "element":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteElementById(req, res);
        break;
      case "startsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteStartsWithById(req, res);
        break;
      case "endsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && deleteEndsWithById(req, res);
        break;
    }
  })
  .post("/:collectionName/", async (req: Request, res: Response) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "type":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addType(req, res);
        break;
      case "category":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addCategory(req, res);
        break;
      case "gender":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addGender(req, res);
        break;
      case "firstName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addFirstName(req, res);
        break;
      case "middleName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addMiddleName(req, res);
        break;
      case "lastName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addLastName(req, res);
        break;
      case "wordCount":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addWordCount(req, res);
        break;
      case "name":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addName(req, res);
        break;
      case "ethnicity":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addEthnicity(req, res);
        break;
      case "meaning":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addMeaning(req, res);
        break;
      case "user":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addUser(req, res);
        break;
      case "zodiacSign":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addZodiacSign(req, res);
        break;
      case "zodiacAnimal":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addZodiacAnimal(req, res);
        break;
      case "element":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addElement(req, res);
        break;
      case "startsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addStartsWith(req, res);
        break;
      case "endsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && addEndsWith(req, res);
        break;
    }
  })
  .patch("/:collectionName/:id", async (req: Request, res: Response) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "type":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateTypeById(req, res);
        break;
      case "category":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateCategoryById(req, res);
        break;
      case "gender":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateGenderById(req, res);
        break;
      case "firstName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateFirstNameById(req, res);
        break;
      case "middleName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateMiddleNameById(req, res);
        break;
      case "lastName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateLastNameById(req, res);
        break;
      case "wordCount":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateWordCountById(req, res);
        break;
      case "name":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateNameById(req, res);
        break;
      case "ethnicity":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateEthnicityById(req, res);
        break;
      case "meaning":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateMeaningById(req, res);
        break;
      case "user":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateUserById(req, res);
        break;
      case "zodiacSign":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateZodiacSignById(req, res);
        break;
      case "zodiacAnimal":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateZodiacAnimalById(req, res);
        break;
      case "element":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateElementById(req, res);
        break;
      case "startsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateStartsWithById(req, res);
        break;
      case "endsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && updateEndsWithById(req, res);
        break;
    }
  });

export default collectionRouter;
