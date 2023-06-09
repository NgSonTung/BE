import express from "express";
import { User } from "../models/UserModel";
import { random, authentication } from "../helpers";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, userName } = req.body;

    if (!password || !userName || !email) {
      return res.status(400).json({ code: 400, msg: "Invalid credentials" });
    }

    const existingUser = await User.findOne({
      $or: [{ userName: userName }, { email: email }],
    });
    if (existingUser) {
      return res.status(400).json({ code: 400, msg: "Invalid credentials" });
    }

    const salt = random();
    User.create({
      userName: userName,
      email: email,
      password: authentication(salt, password),
    })
      .then((user) => {
        res.status(201).json({
          code: 201,
          msg: "Registered successfully!",
          data: user,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to register!",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to register!",
    });
  }
};
