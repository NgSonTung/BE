import { Request, Response } from "express";
import { User } from "../models/UserModel";
import { random, authentication } from "../helpers";

export const login = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(401).json({ code: 400, msg: "Invalid credentials." });
    }

    //incorrect username
    const user = await User.findOne({ userName: userName }).select(
      "+authentication.salt + authentication.password"
    );
    if (!user) {
      return res
        .status(401)
        .json({ code: 401, msg: "The username or password is incorrect." });
    }

    //incorrect password
    const expectedHash = authentication(user.authentication.salt, password);
    if (user.authentication.password !== expectedHash) {
      return res
        .status(401)
        .json({ code: 401, msg: "The username or password is incorrect." });
    }

    //correct
    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );
    await user.save();
    return res
      .cookie("AUTH", user.authentication.sessionToken, {
        domain: "localhost",
        path: "/",
      })
      .status(201)
      .json({
        code: 201,
        msg: "Logged in successfully!",
        data: user,
      });
  } catch (e: any) {
    res.status(500).json({
      code: 500,
      msg: "Failed to login!",
      error: e?.message,
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { email, userName, password } = req.body;

    if (!userName || !password || !email) {
      return res.status(400).json({ code: 400, msg: "Invalid credentials" });
    }

    const existingUser = await User.findOne({
      $or: [{ userName: userName }, { email: email }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ code: 400, msg: "Email or username taken!" });
    }

    const salt = random();
    const user = await User.create({
      userName: userName,
      email: email,
      authentication: { password: authentication(salt, password), salt: salt },
    });

    return res.status(201).json({
      code: 201,
      msg: "Registered successfully!",
      data: user,
    });
  } catch (e: any) {
    res.status(500).json({
      code: 500,
      msg: "Failed to register!",
      error: e?.message,
    });
  }
};
