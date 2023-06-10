import { Request, Response } from "express";
import { User, IUser } from "../models/UserModel";
import mongoose from "mongoose";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      code: 200,
      msg: "Users retrieved successfully.",
      data: users,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve users.",
      error: e?.message,
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        code: 404,
        msg: "User not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "User retrieved successfully.",
      data: user,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve user.",
      error: e?.message,
    });
  }
};

export const deleteAllUsers = async (req: Request, res: Response) => {
  try {
    const deletedUsers = await User.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All users deleted successfully.",
      data: deletedUsers,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all users.",
      error: e?.message,
    });
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({
        code: 404,
        msg: "User not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "User deleted successfully.",
      data: deletedUser,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete user.",
      error: e?.message,
    });
  }
};

export const updateUserById = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const newUser = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        code: 404,
        msg: "User not found",
      });
    }
    Object.keys(newUser).forEach((property) => {
      user[property as keyof IUser] = newUser[property];
    });
    const updatedUser = await user.save();
    return res.status(200).json({
      code: 200,
      msg: "User updated successfully.",
      data: updatedUser,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update user.",
      error: e?.message,
    });
  }
};

export const addUser = async (req: Request, res: Response) => {
  const userData = req.body;
  try {
    const user = await User.create(userData);
    return res.status(201).json({
      code: 201,
      msg: "User added successfully.",
      data: user,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add user.",
      error: e?.message,
    });
  }
};
