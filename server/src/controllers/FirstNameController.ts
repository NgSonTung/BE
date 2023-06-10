import { Request, Response } from "express";
import { FirstName, IFirstName } from "../models/FirstNameModel";
import mongoose from "mongoose";

export const getAllFirstNames = async (req: Request, res: Response) => {
  try {
    const firstNames = await FirstName.find();
    return res.status(200).json({
      code: 200,
      msg: "FirstNames retrieved successfully.",
      data: firstNames,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve firstNames.",
      error: e?.message,
    });
  }
};

export const getFirstNameById = async (req: Request, res: Response) => {
  try {
    const firstNameId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(firstNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const firstName = await FirstName.findById(firstNameId);
    if (!firstName) {
      return res.status(404).json({
        code: 404,
        msg: "FirstName not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "FirstName retrieved successfully.",
      data: firstName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve firstName.",
      error: e?.message,
    });
  }
};

export const deleteAllFirstNames = async (req: Request, res: Response) => {
  try {
    const deletedFirstNames = await FirstName.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All firstNames deleted successfully.",
      data: deletedFirstNames,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all firstNames.",
      error: e?.message,
    });
  }
};

export const deleteFirstNameById = async (req: Request, res: Response) => {
  const firstNameId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(firstNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedFirstName = await FirstName.findByIdAndDelete(firstNameId);
    if (!deletedFirstName) {
      return res.status(404).json({
        code: 404,
        msg: "FirstName not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "FirstName deleted successfully.",
      data: deletedFirstName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete firstName.",
      error: e?.message,
    });
  }
};

export const updateFirstNameById = async (req: Request, res: Response) => {
  const firstNameId = req.params.id;
  const newFirstName = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(firstNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const firstName = await FirstName.findById(firstNameId);
    if (!firstName) {
      return res.status(404).json({
        code: 404,
        msg: "FirstName not found",
      });
    }
    Object.keys(newFirstName).forEach((property) => {
      firstName[property as keyof IFirstName] = newFirstName[property];
    });
    const updatedFirstName = await firstName.save();
    return res.status(200).json({
      code: 200,
      msg: "FirstName updated successfully.",
      data: updatedFirstName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update firstName.",
      error: e?.message,
    });
  }
};

export const addFirstName = async (req: Request, res: Response) => {
  const firstNameData = req.body;
  try {
    const firstName = await FirstName.create(firstNameData);
    return res.status(201).json({
      code: 201,
      msg: "FirstName added successfully.",
      data: firstName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add firstName.",
      error: e?.message,
    });
  }
};
