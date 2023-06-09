import express, { Router } from "express";
import { register } from "../controllers/AuthenticationController";

const authRouter: Router = express.Router();

authRouter.route("/register").post(register);

export default authRouter;
