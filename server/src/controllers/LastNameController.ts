import { Request, Response } from "express";
import { LastName, ILastName } from "../models/LastNameModel";
import mongoose from "mongoose";

export const getAllLastNames = async (req: Request, res: Response) => {
  try {
    const lastNames = await LastName.find();
    return res.status(200).json({
      code: 200,
      msg: "LastNames retrieved successfully.",
      data: lastNames,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve lastNames.",
      error: e?.message,
    });
  }
};

export const getLastNameById = async (req: Request, res: Response) => {
  try {
    const lastNameId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(lastNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const lastName = await LastName.findById(lastNameId);
    if (!lastName) {
      return res.status(404).json({
        code: 404,
        msg: "LastName not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "LastName retrieved successfully.",
      data: lastName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve lastName.",
      error: e?.message,
    });
  }
};

export const deleteAllLastNames = async (req: Request, res: Response) => {
  try {
    const deletedLastNames = await LastName.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All lastNames deleted successfully.",
      data: deletedLastNames,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all lastNames.",
      error: e?.message,
    });
  }
};

export const deleteLastNameById = async (req: Request, res: Response) => {
  const lastNameId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(lastNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedLastName = await LastName.findByIdAndDelete(lastNameId);
    if (!deletedLastName) {
      return res.status(404).json({
        code: 404,
        msg: "LastName not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "LastName deleted successfully.",
      data: deletedLastName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete lastName.",
      error: e?.message,
    });
  }
};

export const updateLastNameById = async (req: Request, res: Response) => {
  const lastNameId = req.params.id;
  const newLastName = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(lastNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const lastName = await LastName.findById(lastNameId);
    if (!lastName) {
      return res.status(404).json({
        code: 404,
        msg: "LastName not found",
      });
    }
    Object.keys(newLastName).forEach((property) => {
      lastName[property as keyof ILastName] = newLastName[property];
    });
    const updatedLastName = await lastName.save();
    return res.status(200).json({
      code: 200,
      msg: "LastName updated successfully.",
      data: updatedLastName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update lastName.",
      error: e?.message,
    });
  }
};

export const addLastName = async (req: Request, res: Response) => {
  const lastNameData = req.body;
  try {
    const lastName = await LastName.create(lastNameData);
    return res.status(201).json({
      code: 201,
      msg: "LastName added successfully.",
      data: lastName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add lastName.",
      error: e?.message,
    });
  }
};
