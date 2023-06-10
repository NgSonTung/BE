import { Request, Response } from "express";
import { Name, IName } from "../models/NameModel";
import mongoose from "mongoose";

export const getAllNames = async (req: Request, res: Response) => {
  try {
    const names = await Name.find();
    return res.status(200).json({
      code: 200,
      msg: "Names retrieved successfully.",
      data: names,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve names.",
      error: e?.message,
    });
  }
};

export const getNameById = async (req: Request, res: Response) => {
  try {
    const nameId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(nameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const name = await Name.findById(nameId);
    if (!name) {
      return res.status(404).json({
        code: 404,
        msg: "Name not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Name retrieved successfully.",
      data: name,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve name.",
      error: e?.message,
    });
  }
};

export const deleteAllNames = async (req: Request, res: Response) => {
  try {
    const deletedNames = await Name.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All names deleted successfully.",
      data: deletedNames,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all names.",
      error: e?.message,
    });
  }
};

export const deleteNameById = async (req: Request, res: Response) => {
  const nameId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(nameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedName = await Name.findByIdAndDelete(nameId);
    if (!deletedName) {
      return res.status(404).json({
        code: 404,
        msg: "Name not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Name deleted successfully.",
      data: deletedName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete name.",
      error: e?.message,
    });
  }
};

export const updateNameById = async (req: Request, res: Response) => {
  const nameId = req.params.id;
  const newName = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(nameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const name = await Name.findById(nameId);
    if (!name) {
      return res.status(404).json({
        code: 404,
        msg: "Name not found",
      });
    }
    Object.keys(newName).forEach((property) => {
      name[property as keyof IName] = newName[property];
    });
    const updatedName = await name.save();
    return res.status(200).json({
      code: 200,
      msg: "Name updated successfully.",
      data: updatedName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update name.",
      error: e?.message,
    });
  }
};

export const addName = async (req: Request, res: Response) => {
  const nameData = req.body;
  try {
    const name = await Name.create(nameData);
    return res.status(201).json({
      code: 201,
      msg: "Name added successfully.",
      data: name,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add name.",
      error: e?.message,
    });
  }
};
