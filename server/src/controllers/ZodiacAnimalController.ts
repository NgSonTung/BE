import { Request, Response } from "express";
import { ZodiacAnimal, IZodiacAnimal } from "../models/zodiacAnimalModel";
import mongoose from "mongoose";

export const getAllZodiacAnimals = async (req: Request, res: Response) => {
  try {
    const zodiacAnimals = await ZodiacAnimal.find();
    return res.status(200).json({
      code: 200,
      msg: "ZodiacAnimals retrieved successfully.",
      data: zodiacAnimals,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve zodiacAnimals.",
      error: e?.message,
    });
  }
};

export const getZodiacAnimalById = async (req: Request, res: Response) => {
  try {
    const zodiacAnimalId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(zodiacAnimalId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const zodiacAnimal = await ZodiacAnimal.findById(zodiacAnimalId);
    if (!zodiacAnimal) {
      return res.status(404).json({
        code: 404,
        msg: "ZodiacAnimal not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "ZodiacAnimal retrieved successfully.",
      data: zodiacAnimal,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve zodiacAnimal.",
      error: e?.message,
    });
  }
};

export const deleteAllZodiacAnimals = async (req: Request, res: Response) => {
  try {
    const deletedZodiacAnimals = await ZodiacAnimal.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All zodiacAnimals deleted successfully.",
      data: deletedZodiacAnimals,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all zodiacAnimals.",
      error: e?.message,
    });
  }
};

export const deleteZodiacAnimalById = async (req: Request, res: Response) => {
  const zodiacAnimalId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(zodiacAnimalId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedZodiacAnimal = await ZodiacAnimal.findByIdAndDelete(
      zodiacAnimalId
    );
    if (!deletedZodiacAnimal) {
      return res.status(404).json({
        code: 404,
        msg: "ZodiacAnimal not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "ZodiacAnimal deleted successfully.",
      data: deletedZodiacAnimal,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete zodiacAnimal.",
      error: e?.message,
    });
  }
};

export const updateZodiacAnimalById = async (req: Request, res: Response) => {
  const zodiacAnimalId = req.params.id;
  const newZodiacAnimal = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(zodiacAnimalId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const zodiacAnimal = await ZodiacAnimal.findById(zodiacAnimalId);
    if (!zodiacAnimal) {
      return res.status(404).json({
        code: 404,
        msg: "ZodiacAnimal not found",
      });
    }
    Object.keys(newZodiacAnimal).forEach((property) => {
      zodiacAnimal[property as keyof IZodiacAnimal] = newZodiacAnimal[property];
    });
    const updatedZodiacAnimal = await zodiacAnimal.save();
    return res.status(200).json({
      code: 200,
      msg: "ZodiacAnimal updated successfully.",
      data: updatedZodiacAnimal,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update zodiacAnimal.",
      error: e?.message,
    });
  }
};

export const addZodiacAnimal = async (req: Request, res: Response) => {
  const zodiacAnimalData = req.body;
  try {
    const zodiacAnimal = await ZodiacAnimal.create(zodiacAnimalData);
    return res.status(201).json({
      code: 201,
      msg: "ZodiacAnimal added successfully.",
      data: zodiacAnimal,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add zodiacAnimal.",
      error: e?.message,
    });
  }
};
