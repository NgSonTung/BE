import dotenv from "dotenv";
import { User } from "../models/userModel";
import { Request, Response } from "express";
import { get, merge } from "lodash";

export const isAdmin = async (req: Request, res: Response) => {
  dotenv.config({
    path: "./config.env",
  });
  const ADMIN = process.env.ADMIN;
  try {
    const role = get(req, "identity.role")! as string;
    if (!role) {
      return res.status(403).json({
        code: 403,
        msg: "Unauthorized.",
      });
    }

    if (role.toString() !== ADMIN) {
      return res.status(403).json({
        code: 403,
        msg: "Unauthorized.",
      });
    }
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to login.",
      error: e?.message,
    });
  }
};

export const isAuthenticated = async (req: Request, res: Response) => {
  try {
    const sessionToken = req.cookies["AUTH"];
    if (!sessionToken) {
      return res.status(403).json({
        code: 403,
        msg: "Unauthorized.",
      });
    }

    const existingUser = await User.findOne({
      "authentication.sessionToken": sessionToken,
    });
    if (!existingUser) {
      return res.status(403).json({
        code: 403,
        msg: "Unauthorized.",
      });
    }

    merge(req, { identity: existingUser });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to login.",
      error: e?.message,
    });
  }
};
