import { Request, Response } from "express";
import { Meaning, IMeaning } from "../models/MeaningModel";
import mongoose from "mongoose";

export const getAllMeanings = async (req: Request, res: Response) => {
  try {
    const meanings = await Meaning.find();
    return res.status(200).json({
      code: 200,
      msg: "Meanings retrieved successfully.",
      data: meanings,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve meanings.",
      error: e?.message,
    });
  }
};

export const getMeaningById = async (req: Request, res: Response) => {
  try {
    const meaningId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(meaningId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const meaning = await Meaning.findById(meaningId);
    if (!meaning) {
      return res.status(404).json({
        code: 404,
        msg: "Meaning not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Meaning retrieved successfully.",
      data: meaning,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve meaning.",
      error: e?.message,
    });
  }
};

export const deleteAllMeanings = async (req: Request, res: Response) => {
  try {
    const deletedMeanings = await Meaning.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All meanings deleted successfully.",
      data: deletedMeanings,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all meanings.",
      error: e?.message,
    });
  }
};

export const deleteMeaningById = async (req: Request, res: Response) => {
  const meaningId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(meaningId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedMeaning = await Meaning.findByIdAndDelete(meaningId);
    if (!deletedMeaning) {
      return res.status(404).json({
        code: 404,
        msg: "Meaning not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Meaning deleted successfully.",
      data: deletedMeaning,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete meaning.",
      error: e?.message,
    });
  }
};

export const updateMeaningById = async (req: Request, res: Response) => {
  const meaningId = req.params.id;
  const newMeaning = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(meaningId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const meaning = await Meaning.findById(meaningId);
    if (!meaning) {
      return res.status(404).json({
        code: 404,
        msg: "Meaning not found",
      });
    }
    Object.keys(newMeaning).forEach((property) => {
      meaning[property as keyof IMeaning] = newMeaning[property];
    });
    const updatedMeaning = await meaning.save();
    return res.status(200).json({
      code: 200,
      msg: "Meaning updated successfully.",
      data: updatedMeaning,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update meaning.",
      error: e?.message,
    });
  }
};

export const addMeaning = async (req: Request, res: Response) => {
  const meaningData = req.body;
  try {
    const meaning = await Meaning.create(meaningData);
    return res.status(201).json({
      code: 201,
      msg: "Meaning added successfully.",
      data: meaning,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add meaning.",
      error: e?.message,
    });
  }
};
