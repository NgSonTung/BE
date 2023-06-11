import { Request, Response } from "express";
import { ZodiacSign, IZodiacSign } from "../models/zodiacSignModel";
import mongoose from "mongoose";

export const getAllZodiacSigns = async (req: Request, res: Response) => {
  try {
    const zodiacSigns = await ZodiacSign.find();
    return res.status(200).json({
      code: 200,
      msg: "ZodiacSigns retrieved successfully.",
      data: zodiacSigns,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve zodiacSigns.",
      error: e?.message,
    });
  }
};

export const getZodiacSignById = async (req: Request, res: Response) => {
  try {
    const zodiacSignId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(zodiacSignId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const zodiacSign = await ZodiacSign.findById(zodiacSignId);
    if (!zodiacSign) {
      return res.status(404).json({
        code: 404,
        msg: "ZodiacSign not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "ZodiacSign retrieved successfully.",
      data: zodiacSign,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve zodiacSign.",
      error: e?.message,
    });
  }
};

export const deleteAllZodiacSigns = async (req: Request, res: Response) => {
  try {
    const deletedZodiacSigns = await ZodiacSign.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All zodiacSigns deleted successfully.",
      data: deletedZodiacSigns,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all zodiacSigns.",
      error: e?.message,
    });
  }
};

export const deleteZodiacSignById = async (req: Request, res: Response) => {
  const zodiacSignId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(zodiacSignId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedZodiacSign = await ZodiacSign.findByIdAndDelete(zodiacSignId);
    if (!deletedZodiacSign) {
      return res.status(404).json({
        code: 404,
        msg: "ZodiacSign not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "ZodiacSign deleted successfully.",
      data: deletedZodiacSign,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete zodiacSign.",
      error: e?.message,
    });
  }
};

export const updateZodiacSignById = async (req: Request, res: Response) => {
  const zodiacSignId = req.params.id;
  const newZodiacSign = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(zodiacSignId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const zodiacSign = await ZodiacSign.findById(zodiacSignId);
    if (!zodiacSign) {
      return res.status(404).json({
        code: 404,
        msg: "ZodiacSign not found",
      });
    }
    Object.keys(newZodiacSign).forEach((property) => {
      zodiacSign[property as keyof IZodiacSign] = newZodiacSign[property];
    });
    const updatedZodiacSign = await zodiacSign.save();
    return res.status(200).json({
      code: 200,
      msg: "ZodiacSign updated successfully.",
      data: updatedZodiacSign,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update zodiacSign.",
      error: e?.message,
    });
  }
};

export const addZodiacSign = async (req: Request, res: Response) => {
  const zodiacSignData = req.body;
  try {
    const zodiacSign = await ZodiacSign.create(zodiacSignData);
    return res.status(201).json({
      code: 201,
      msg: "ZodiacSign added successfully.",
      data: zodiacSign,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add zodiacSign.",
      error: e?.message,
    });
  }
};
