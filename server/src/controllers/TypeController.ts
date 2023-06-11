import { Request, Response } from "express";
import { Type, IType } from "../models/typeModel";
import mongoose from "mongoose";

export const getAllTypes = async (req: Request, res: Response) => {
  try {
    const types = await Type.find();
    return res.status(200).json({
      code: 200,
      msg: "Types retrieved successfully.",
      data: types,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve types.",
      error: e?.message,
    });
  }
};

export const getTypeById = async (req: Request, res: Response) => {
  try {
    const typeId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(typeId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const type = await Type.findById(typeId);
    if (!type) {
      return res.status(404).json({
        code: 404,
        msg: "Type not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Type retrieved successfully.",
      data: type,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve type.",
      error: e?.message,
    });
  }
};

export const deleteAllTypes = async (req: Request, res: Response) => {
  try {
    const deletedTypes = await Type.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All types deleted successfully.",
      data: deletedTypes,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all types.",
      error: e?.message,
    });
  }
};

export const deleteTypeById = async (req: Request, res: Response) => {
  const typeId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(typeId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedType = await Type.findByIdAndDelete(typeId);
    if (!deletedType) {
      return res.status(404).json({
        code: 404,
        msg: "Type not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Type deleted successfully.",
      data: deletedType,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete type.",
      error: e?.message,
    });
  }
};

export const updateTypeById = async (req: Request, res: Response) => {
  const typeId = req.params.id;
  const newType = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(typeId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const type = await Type.findById(typeId);
    if (!type) {
      return res.status(404).json({
        code: 404,
        msg: "Type not found",
      });
    }
    Object.keys(newType).forEach((property) => {
      type[property as keyof IType] = newType[property];
    });
    const updatedType = await type.save();
    return res.status(200).json({
      code: 200,
      msg: "Type updated successfully.",
      data: updatedType,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update type.",
      error: e?.message,
    });
  }
};

export const addType = async (req: Request, res: Response) => {
  const typeData = req.body;
  try {
    const type = await Type.create(typeData);
    return res.status(201).json({
      code: 201,
      msg: "Type added successfully.",
      data: type,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add type.",
      error: e?.message,
    });
  }
};
