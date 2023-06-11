import { Request, Response } from "express";
import { StartsWith, IStartsWith } from "../models/startsWithModel";
import mongoose from "mongoose";

export const getAllStartsWiths = async (req: Request, res: Response) => {
  try {
    const startsWiths = await StartsWith.find();
    return res.status(200).json({
      code: 200,
      msg: "StartsWiths retrieved successfully.",
      data: startsWiths,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve startsWiths.",
      error: e?.message,
    });
  }
};

export const getStartsWithById = async (req: Request, res: Response) => {
  try {
    const startsWithId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(startsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const startsWith = await StartsWith.findById(startsWithId);
    if (!startsWith) {
      return res.status(404).json({
        code: 404,
        msg: "StartsWith not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "StartsWith retrieved successfully.",
      data: startsWith,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve startsWith.",
      error: e?.message,
    });
  }
};

export const deleteAllStartsWiths = async (req: Request, res: Response) => {
  try {
    const deletedStartsWiths = await StartsWith.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All startsWiths deleted successfully.",
      data: deletedStartsWiths,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all startsWiths.",
      error: e?.message,
    });
  }
};

export const deleteStartsWithById = async (req: Request, res: Response) => {
  const startsWithId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(startsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedStartsWith = await StartsWith.findByIdAndDelete(startsWithId);
    if (!deletedStartsWith) {
      return res.status(404).json({
        code: 404,
        msg: "StartsWith not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "StartsWith deleted successfully.",
      data: deletedStartsWith,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete startsWith.",
      error: e?.message,
    });
  }
};

export const updateStartsWithById = async (req: Request, res: Response) => {
  const startsWithId = req.params.id;
  const newStartsWith = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(startsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const startsWith = await StartsWith.findById(startsWithId);
    if (!startsWith) {
      return res.status(404).json({
        code: 404,
        msg: "StartsWith not found",
      });
    }
    Object.keys(newStartsWith).forEach((property) => {
      startsWith[property as keyof IStartsWith] = newStartsWith[property];
    });
    const updatedStartsWith = await startsWith.save();
    return res.status(200).json({
      code: 200,
      msg: "StartsWith updated successfully.",
      data: updatedStartsWith,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update startsWith.",
      error: e?.message,
    });
  }
};

export const addStartsWith = async (req: Request, res: Response) => {
  const startsWithData = req.body;
  try {
    const startsWith = await StartsWith.create(startsWithData);
    return res.status(201).json({
      code: 201,
      msg: "StartsWith added successfully.",
      data: startsWith,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add startsWith.",
      error: e?.message,
    });
  }
};
