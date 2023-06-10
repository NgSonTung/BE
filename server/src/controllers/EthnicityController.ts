import { Request, Response } from "express";
import { Ethnicity, IEthnicity } from "../models/EthnicityModel";
import mongoose from "mongoose";

export const getAllEthnicities = async (req: Request, res: Response) => {
  try {
    const ethnicities = await Ethnicity.find();
    return res.status(200).json({
      code: 200,
      msg: "Ethnicities retrieved successfully.",
      data: ethnicities,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve ethnicities.",
      error: e?.message,
    });
  }
};

export const getEthnicityById = async (req: Request, res: Response) => {
  try {
    const ethnicityId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(ethnicityId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const ethnicity = await Ethnicity.findById(ethnicityId);
    if (!ethnicity) {
      return res.status(404).json({
        code: 404,
        msg: "Ethnicity not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Ethnicity retrieved successfully.",
      data: ethnicity,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve ethnicity.",
      error: e?.message,
    });
  }
};

export const deleteAllEthnicities = async (req: Request, res: Response) => {
  try {
    const deletedEthnicities = await Ethnicity.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All ethnicities deleted successfully.",
      data: deletedEthnicities,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all ethnicities.",
      error: e?.message,
    });
  }
};

export const deleteEthnicityById = async (req: Request, res: Response) => {
  const ethnicityId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(ethnicityId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedEthnicity = await Ethnicity.findByIdAndDelete(ethnicityId);
    if (!deletedEthnicity) {
      return res.status(404).json({
        code: 404,
        msg: "Ethnicity not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Ethnicity deleted successfully.",
      data: deletedEthnicity,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete ethnicity.",
      error: e?.message,
    });
  }
};

export const updateEthnicityById = async (req: Request, res: Response) => {
  const ethnicityId = req.params.id;
  const newEthnicity = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(ethnicityId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const ethnicity = await Ethnicity.findById(ethnicityId);
    if (!ethnicity) {
      return res.status(404).json({
        code: 404,
        msg: "Ethnicity not found",
      });
    }
    Object.keys(newEthnicity).forEach((property) => {
      ethnicity[property as keyof IEthnicity] = newEthnicity[property];
    });
    const updatedEthnicity = await ethnicity.save();
    return res.status(200).json({
      code: 200,
      msg: "Ethnicity updated successfully.",
      data: updatedEthnicity,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update ethnicity.",
      error: e?.message,
    });
  }
};

export const addEthnicity = async (req: Request, res: Response) => {
  const ethnicityData = req.body;
  try {
    const ethnicity = await Ethnicity.create(ethnicityData);
    return res.status(201).json({
      code: 201,
      msg: "Ethnicity added successfully.",
      data: ethnicity,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add ethnicity.",
      error: e?.message,
    });
  }
};
