import { Request, Response } from "express";
import { Category, ICategory } from "../models/categoryModel";
import mongoose from "mongoose";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    return res.status(200).json({
      code: 200,
      msg: "Categories retrieved successfully.",
      data: categories,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve categories.",
      error: e?.message,
    });
  }
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const categoryId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({
        code: 404,
        msg: "Category not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Category retrieved successfully.",
      data: category,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve category.",
      error: e?.message,
    });
  }
};

export const deleteAllCategories = async (req: Request, res: Response) => {
  try {
    const deletedCategories = await Category.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All categories deleted successfully.",
      data: deletedCategories,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all categories.",
      error: e?.message,
    });
  }
};

export const deleteCategoryById = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({
        code: 404,
        msg: "Category not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "Category deleted successfully.",
      data: deletedCategory,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete category.",
      error: e?.message,
    });
  }
};

export const updateCategoryById = async (req: Request, res: Response) => {
  const categoryId = req.params.id;
  const newCategory = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({
        code: 404,
        msg: "Category not found",
      });
    }
    Object.keys(newCategory).forEach((property) => {
      category[property as keyof ICategory] = newCategory[property];
    });
    const updatedCategory = await category.save();
    return res.status(200).json({
      code: 200,
      msg: "Category updated successfully.",
      data: updatedCategory,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update category.",
      error: e?.message,
    });
  }
};

export const addCategory = async (req: Request, res: Response) => {
  const categoryData = req.body;
  try {
    const category = await Category.create(categoryData);
    return res.status(201).json({
      code: 201,
      msg: "Category added successfully.",
      data: category,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add category.",
      error: e?.message,
    });
  }
};
