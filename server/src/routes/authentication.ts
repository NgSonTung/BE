import express, { Router } from "express";
import { login, register } from "../controllers/authenticationController";
import { getAllCategories } from "../controllers/categoryController";

const authRouter: Router = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);

export default authRouter;
