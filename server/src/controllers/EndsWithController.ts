import { Request, Response } from "express";
import { EndsWith, IEndsWith } from "../models/endsWithModel";
import mongoose from "mongoose";

export const getAllEndsWiths = async (req: Request, res: Response) => {
  try {
    const endsWiths = await EndsWith.find();
    return res.status(200).json({
      code: 200,
      msg: "EndsWiths retrieved successfully.",
      data: endsWiths,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve endsWiths.",
      error: e?.message,
    });
  }
};

export const getEndsWithById = async (req: Request, res: Response) => {
  try {
    const endsWithId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(endsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const endsWith = await EndsWith.findById(endsWithId);
    if (!endsWith) {
      return res.status(404).json({
        code: 404,
        msg: "EndsWith not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "EndsWith retrieved successfully.",
      data: endsWith,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve endsWith.",
      error: e?.message,
    });
  }
};

export const deleteAllEndsWiths = async (req: Request, res: Response) => {
  try {
    const deletedEndsWiths = await EndsWith.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All endsWiths deleted successfully.",
      data: deletedEndsWiths,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all endsWiths.",
      error: e?.message,
    });
  }
};

export const deleteEndsWithById = async (req: Request, res: Response) => {
  const endsWithId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(endsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedEndsWith = await EndsWith.findByIdAndDelete(endsWithId);
    if (!deletedEndsWith) {
      return res.status(404).json({
        code: 404,
        msg: "EndsWith not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "EndsWith deleted successfully.",
      data: deletedEndsWith,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete endsWith.",
      error: e?.message,
    });
  }
};

export const updateEndsWithById = async (req: Request, res: Response) => {
  const endsWithId = req.params.id;
  const newEndsWith = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(endsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const endsWith = await EndsWith.findById(endsWithId);
    if (!endsWith) {
      return res.status(404).json({
        code: 404,
        msg: "EndsWith not found",
      });
    }
    Object.keys(newEndsWith).forEach((property) => {
      endsWith[property as keyof IEndsWith] = newEndsWith[property];
    });
    const updatedEndsWith = await endsWith.save();
    return res.status(200).json({
      code: 200,
      msg: "EndsWith updated successfully.",
      data: updatedEndsWith,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update endsWith.",
      error: e?.message,
    });
  }
};

export const addEndsWith = async (req: Request, res: Response) => {
  const endsWithData = req.body;
  try {
    const endsWith = await EndsWith.create(endsWithData);
    return res.status(201).json({
      code: 201,
      msg: "EndsWith added successfully.",
      data: endsWith,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add endsWith.",
      error: e?.message,
    });
  }
};
