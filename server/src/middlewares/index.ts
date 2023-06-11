import { User } from "../models/userModel";
import { NextFunction, Request, Response } from "express";
import { get, merge } from "lodash";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    return next();
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to login.",
      error: e?.message,
    });
  }
};
