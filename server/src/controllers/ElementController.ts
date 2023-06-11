import { Request, Response } from "express";
import { Element, IElement } from "../models/elementModel";
import mongoose from "mongoose";

export const getAllElements = async (req: Request, res: Response) => {
  try {
    const elements = await Element.find();
    return res.status(200).json({
      code: 200,
      msg: "Elements retrieved successfully.",
      data: elements,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve elements.",
      error: e?.message,
    });
  }
};

export const getElementById = async (req: Request, res: Response) => {
  try {
    const elementId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(elementId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const element = await Element.findById(elementId);
    if (!element) {
      return res.status(404).json({
        code: 404,
        msg: "Element not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Element retrieved successfully.",
      data: element,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve element.",
      error: e?.message,
    });
  }
};

export const deleteAllElements = async (req: Request, res: Response) => {
  try {
    const deletedElements = await Element.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All elements deleted successfully.",
      data: deletedElements,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all elements.",
      error: e?.message,
    });
  }
};

export const deleteElementById = async (req: Request, res: Response) => {
  const elementId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(elementId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedElement = await Element.findByIdAndDelete(elementId);
    if (!deletedElement) {
      return res.status(404).json({
        code: 404,
        msg: "Element not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Element deleted successfully.",
      data: deletedElement,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete element.",
      error: e?.message,
    });
  }
};

export const updateElementById = async (req: Request, res: Response) => {
  const elementId = req.params.id;
  const newElement = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(elementId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const element = await Element.findById(elementId);
    if (!element) {
      return res.status(404).json({
        code: 404,
        msg: "Element not found",
      });
    }
    Object.keys(newElement).forEach((property) => {
      element[property as keyof IElement] = newElement[property];
    });
    const updatedElement = await element.save();
    return res.status(200).json({
      code: 200,
      msg: "Element updated successfully.",
      data: updatedElement,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update element.",
      error: e?.message,
    });
  }
};

export const addElement = async (req: Request, res: Response) => {
  const elementData = req.body;
  try {
    const element = await Element.create(elementData);
    return res.status(201).json({
      code: 201,
      msg: "Element added successfully.",
      data: element,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add element.",
      error: e?.message,
    });
  }
};
