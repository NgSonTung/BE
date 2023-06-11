import { Request, Response } from "express";
import { WordCount, IWordCount } from "../models/wordCountModel";
import mongoose from "mongoose";

export const getAllWordCounts = async (req: Request, res: Response) => {
  try {
    const wordCounts = await WordCount.find();
    return res.status(200).json({
      code: 200,
      msg: "WordCounts retrieved successfully.",
      data: wordCounts,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve wordCounts.",
      error: e?.message,
    });
  }
};

export const getWordCountById = async (req: Request, res: Response) => {
  try {
    const wordCountId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(wordCountId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const wordCount = await WordCount.findById(wordCountId);
    if (!wordCount) {
      return res.status(404).json({
        code: 404,
        msg: "WordCount not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "WordCount retrieved successfully.",
      data: wordCount,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve wordCount.",
      error: e?.message,
    });
  }
};

export const deleteAllWordCounts = async (req: Request, res: Response) => {
  try {
    const deletedWordCounts = await WordCount.deleteMany();
    return res.status(200).json({
      code: 200,
      msg: "All wordCounts deleted successfully.",
      data: deletedWordCounts,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete all wordCounts.",
      error: e?.message,
    });
  }
};

export const deleteWordCountById = async (req: Request, res: Response) => {
  const wordCountId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(wordCountId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    const deletedWordCount = await WordCount.findByIdAndDelete(wordCountId);
    if (!deletedWordCount) {
      return res.status(404).json({
        code: 404,
        msg: "WordCount not found",
      });
    }
    return res.status(200).json({
      code: 200,
      msg: "WordCount deleted successfully.",
      data: deletedWordCount,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to delete wordCount.",
      error: e?.message,
    });
  }
};

export const updateWordCountById = async (req: Request, res: Response) => {
  const wordCountId = req.params.id;
  const newWordCount = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(wordCountId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id.",
      });
    }
    const wordCount = await WordCount.findById(wordCountId);
    if (!wordCount) {
      return res.status(404).json({
        code: 404,
        msg: "WordCount not found",
      });
    }
    Object.keys(newWordCount).forEach((property) => {
      wordCount[property as keyof IWordCount] = newWordCount[property];
    });
    const updatedWordCount = await wordCount.save();
    return res.status(200).json({
      code: 200,
      msg: "WordCount updated successfully.",
      data: updatedWordCount,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to update wordCount.",
      error: e?.message,
    });
  }
};

export const addWordCount = async (req: Request, res: Response) => {
  const wordCountData = req.body;
  try {
    const wordCount = await WordCount.create(wordCountData);
    return res.status(201).json({
      code: 201,
      msg: "WordCount added successfully.",
      data: wordCount,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to add wordCount.",
      error: e?.message,
    });
  }
};
