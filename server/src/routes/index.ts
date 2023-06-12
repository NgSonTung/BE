import { isAuthenticated, isAdmin } from "./../middlewares/index";
import express, { Request, Response, Router } from "express";
import { Controller } from "./../controllers/index";
import {
  createUser,
  login,
  register,
} from "../controllers/authenticationController";
import { getAllCollections } from "../controllers/collectionController";
import {
  Type,
  Category,
  Gender,
  FirstName,
  MiddleName,
  LastName,
  WordCount,
  Name,
  Ethnicity,
  Meaning,
  User,
  ZodiacSign,
  ZodiacAnimal,
  Element,
  StartsWith,
  EndsWith,
} from "../models";

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
        Controller.getAll(Type, req, res);
        break;
      case "category":
        Controller.getAll(Category, req, res);
        break;
      case "gender":
        Controller.getAll(Gender, req, res);
        break;
      case "firstName":
        Controller.getAll(FirstName, req, res);
        break;
      case "middleName":
        Controller.getAll(MiddleName, req, res);
        break;
      case "lastName":
        Controller.getAll(LastName, req, res);
        break;
      case "wordCount":
        Controller.getAll(WordCount, req, res);
        break;
      case "name":
        Controller.getAll(Name, req, res);
        break;
      case "ethnicity":
        Controller.getAll(Ethnicity, req, res);
        break;
      case "meaning":
        Controller.getAll(Meaning, req, res);
        break;
      case "user":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.getAll(User, req, res));
        break;
      case "zodiacSign":
        Controller.getAll(ZodiacSign, req, res);
        break;
      case "zodiacAnimal":
        Controller.getAll(ZodiacAnimal, req, res);
        break;
      case "element":
        Controller.getAll(Element, req, res);
        break;
      case "startsWith":
        Controller.getAll(StartsWith, req, res);
        break;
      case "endsWith":
        Controller.getAll(EndsWith, req, res);
        break;
    }
  })
  .get("/:collectionName/:id", async (req: Request, res: Response) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "type":
        Controller.getById(Type, req, res);
        break;
      case "category":
        Controller.getById(Category, req, res);
        break;
      case "gender":
        Controller.getById(Gender, req, res);
        break;
      case "firstName":
        Controller.getById(FirstName, req, res);
        break;
      case "middleName":
        Controller.getById(MiddleName, req, res);
        break;
      case "lastName":
        Controller.getById(LastName, req, res);
        break;
      case "wordCount":
        Controller.getById(WordCount, req, res);
        break;
      case "name":
        Controller.getById(Name, req, res);
        break;
      case "ethnicity":
        Controller.getById(Ethnicity, req, res);
        break;
      case "meaning":
        Controller.getById(Meaning, req, res);
        break;
      case "user":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.getById(User, req, res));
        break;
      case "zodiacSign":
        Controller.getById(ZodiacSign, req, res);
        break;
      case "zodiacAnimal":
        Controller.getById(ZodiacAnimal, req, res);
        break;
      case "element":
        Controller.getById(Element, req, res);
        break;
      case "startsWith":
        Controller.getById(StartsWith, req, res);
        break;
      case "endsWith":
        Controller.getById(EndsWith, req, res);
        break;
    }
  })
  // .delete("/:collectionName", async (req: Request, res: Response) => {
  //   const { collectionName } = req.params;
  //   switch (collectionName) {
  //     case "type":
  //       Controller.deleteAll(Type, req, res);
  //       break;
  //     case "category":
  //       Controller.deleteAll(Category, req, res);
  //       break;
  //     case "gender":
  //       Controller.deleteAll(Gender, req, res);
  //       break;
  //     case "firstName":
  //       Controller.deleteAll(FirstName, req, res);
  //       break;
  //     case "middleName":
  //       Controller.deleteAll(MiddleName, req, res);
  //       break;
  //     case "lastName":
  //       Controller.deleteAll(LastName, req, res);
  //       break;
  //     case "wordCount":
  //       Controller.deleteAll(WordCount, req, res);
  //       break;
  //     case "name":
  //       Controller.deleteAll(Name, req, res);
  //       break;
  //     case "ethnicity":
  //       Controller.deleteAll(Ethnicity, req, res);
  //       break;
  //     case "meaning":
  //       Controller.deleteAll(Meaning, req, res);
  //       break;
  //     case "user":
  //       Controller.deleteAll(User, req, res);
  //       break;
  //     case "zodiacSign":
  //       Controller.deleteAll(ZodiacSign, req, res);
  //       break;
  //     case "zodiacAnimal":
  //       Controller.deleteAll(ZodiacAnimal, req, res);
  //       break;
  //     case "element":
  //       Controller.deleteAll(Element, req, res);
  //       break;
  //     case "startsWith":
  //       Controller.deleteAll(StartsWith, req, res);
  //       break;
  //     case "endsWith":
  //       Controller.deleteAll(EndsWith, req, res);
  //       break;
  //   }
  // })
  .delete("/:collectionName/:id", async (req: Request, res: Response) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "type":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(Type, req, res));
        break;
      case "category":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(Category, req, res));
        break;
      case "gender":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(Gender, req, res));
        break;
      case "firstName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(FirstName, req, res));
        break;
      case "middleName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(MiddleName, req, res));
        break;
      case "lastName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(LastName, req, res));
        break;
      case "wordCount":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(WordCount, req, res));
        break;
      case "name":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(Name, req, res));
        break;
      case "ethnicity":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(Ethnicity, req, res));
        break;
      case "meaning":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(Meaning, req, res));
        break;
      case "user":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(User, req, res));
        break;
      case "zodiacSign":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(ZodiacSign, req, res));
        break;
      case "zodiacAnimal":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent &&
          (await Controller.deleteById(ZodiacAnimal, req, res));
        break;
      case "element":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(Element, req, res));
        break;
      case "startsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(StartsWith, req, res));
        break;
      case "endsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.deleteById(EndsWith, req, res));
        break;
    }
  })
  .post("/:collectionName/", async (req: Request, res: Response) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "type":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(Type, req, res));
        break;
      case "category":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(Category, req, res));
        break;
      case "gender":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(Gender, req, res));
        break;
      case "firstName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(FirstName, req, res));
        break;
      case "middleName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(MiddleName, req, res));
        break;
      case "lastName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(LastName, req, res));
        break;
      case "wordCount":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(WordCount, req, res));
        break;
      case "name":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(Name, req, res));
        break;
      case "ethnicity":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(Ethnicity, req, res));
        break;
      case "meaning":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(Meaning, req, res));
        break;
      case "user":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await createUser(req, res));
        break;
      case "zodiacSign":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(ZodiacSign, req, res));
        break;
      case "zodiacAnimal":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(ZodiacAnimal, req, res));
        break;
      case "element":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(Element, req, res));
        break;
      case "startsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(StartsWith, req, res));
        break;
      case "endsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.create(EndsWith, req, res));
        break;
    }
  })
  .patch("/:collectionName/:id", async (req: Request, res: Response) => {
    const { collectionName } = req.params;
    switch (collectionName) {
      case "type":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(Type, req, res));
        break;
      case "category":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(Category, req, res));
        break;
      case "gender":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(Gender, req, res));
        break;
      case "firstName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(FirstName, req, res));
        break;
      case "middleName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(MiddleName, req, res));
        break;
      case "lastName":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(LastName, req, res));
        break;
      case "wordCount":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(WordCount, req, res));
        break;
      case "name":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(Name, req, res));
        break;
      case "ethnicity":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(Ethnicity, req, res));
        break;
      case "meaning":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(Meaning, req, res));
        break;
      case "user":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(User, req, res));
        break;
      case "zodiacSign":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(ZodiacSign, req, res));
        break;
      case "zodiacAnimal":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent &&
          (await Controller.updateById(ZodiacAnimal, req, res));
        break;
      case "element":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(Element, req, res));
        break;
      case "startsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(StartsWith, req, res));
        break;
      case "endsWith":
        await isAuthenticated(req, res);
        !res.headersSent && (await isAdmin(req, res));
        !res.headersSent && (await Controller.updateById(EndsWith, req, res));
        break;
    }
  });

export default collectionRouter;
