import { Request, Response } from "express";
import { MiddleName, IMiddleName } from "../models/MiddleNameModel";
import mongoose from "mongoose";

export const getAllMiddleNames = async (req: Request, res: Response) => {
  try {
    const middleNames = await MiddleName.find();
    return res.status(200).json({
      code: 200,
      msg: "MiddleNames retrieved successfully.",
      data: middleNames,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve middleNames.",
      error: e?.message,
    });
  }
};

export const getMiddleNameById = async (req: Request, res: Response) => {
  try {
    const middleNameId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(middleNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const middleName = await MiddleName.findById(middleNameId);
    if (!middleName) {
      return res.status(404).json({
        code: 404,
        msg: "MiddleName not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "MiddleName retrieved successfully.",
      data: middleName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve middleName.",
      error: e?.message,
    });
  }
};

export const deleteAllMiddleNames = async (req: Request, res: Response) => {
  try {
    const deletedMiddleNames = await MiddleName.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All middleNames deleted successfully.",
      data: deletedMiddleNames,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all middleNames.",
      error: e?.message,
    });
  }
};

export const deleteMiddleNameById = async (req: Request, res: Response) => {
  const middleNameId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(middleNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedMiddleName = await MiddleName.findByIdAndDelete(middleNameId);
    if (!deletedMiddleName) {
      return res.status(404).json({
        code: 404,
        msg: "MiddleName not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "MiddleName deleted successfully.",
      data: deletedMiddleName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete middleName.",
      error: e?.message,
    });
  }
};

export const updateMiddleNameById = async (req: Request, res: Response) => {
  const middleNameId = req.params.id;
  const newMiddleName = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(middleNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const middleName = await MiddleName.findById(middleNameId);
    if (!middleName) {
      return res.status(404).json({
        code: 404,
        msg: "MiddleName not found",
      });
    }
    Object.keys(newMiddleName).forEach((property) => {
      middleName[property as keyof IMiddleName] = newMiddleName[property];
    });
    const updatedMiddleName = await middleName.save();
    return res.status(200).json({
      code: 200,
      msg: "MiddleName updated successfully.",
      data: updatedMiddleName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update middleName.",
      error: e?.message,
    });
  }
};

export const addMiddleName = async (req: Request, res: Response) => {
  const middleNameData = req.body;
  try {
    const middleName = await MiddleName.create(middleNameData);
    return res.status(201).json({
      code: 201,
      msg: "MiddleName added successfully.",
      data: middleName,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add middleName.",
      error: e?.message,
    });
  }
};
