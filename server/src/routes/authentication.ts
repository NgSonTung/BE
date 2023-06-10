import express, { Router } from "express";
import { login, register } from "../controllers/AuthenticationController";
import { getAllCategories } from "../controllers/CategoryController";

const authRouter: Router = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);

export default authRouter;
