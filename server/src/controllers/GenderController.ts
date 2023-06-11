import { Request, Response } from "express";
import { Gender, IGender } from "../models/genderModel";
import mongoose from "mongoose";

export const getAllGenders = async (req: Request, res: Response) => {
  try {
    const genders = await Gender.find();
    return res.status(200).json({
      code: 200,
      msg: "Genders retrieved successfully.",
      data: genders,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve genders.",
      error: e?.message,
    });
  }
};

export const getGenderById = async (req: Request, res: Response) => {
  try {
    const genderId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(genderId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const gender = await Gender.findById(genderId);
    if (!gender) {
      return res.status(404).json({
        code: 404,
        msg: "Gender not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Gender retrieved successfully.",
      data: gender,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve gender.",
      error: e?.message,
    });
  }
};

export const deleteAllGenders = async (req: Request, res: Response) => {
  try {
    const deletedGenders = await Gender.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All genders deleted successfully.",
      data: deletedGenders,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all genders.",
      error: e?.message,
    });
  }
};

export const deleteGenderById = async (req: Request, res: Response) => {
  const genderId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(genderId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedGender = await Gender.findByIdAndDelete(genderId);
    if (!deletedGender) {
      return res.status(404).json({
        code: 404,
        msg: "Gender not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Gender deleted successfully.",
      data: deletedGender,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete gender.",
      error: e?.message,
    });
  }
};

export const updateGenderById = async (req: Request, res: Response) => {
  const genderId = req.params.id;
  const newGender = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(genderId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const gender = await Gender.findById(genderId);
    if (!gender) {
      return res.status(404).json({
        code: 404,
        msg: "Gender not found",
      });
    }
    Object.keys(newGender).forEach((property) => {
      gender[property as keyof IGender] = newGender[property];
    });
    const updatedGender = await gender.save();
    return res.status(200).json({
      code: 200,
      msg: "Gender updated successfully.",
      data: updatedGender,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update gender.",
      error: e?.message,
    });
  }
};

export const addGender = async (req: Request, res: Response) => {
  const genderData = req.body;
  try {
    const gender = await Gender.create(genderData);
    return res.status(201).json({
      code: 201,
      msg: "Gender added successfully.",
      data: gender,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add gender.",
      error: e?.message,
    });
  }
};
