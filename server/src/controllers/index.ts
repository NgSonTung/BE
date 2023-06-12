import { Request, Response } from "express";
import mongoose, { Model } from "mongoose";

export class Controller {
  public static getAll = async (model: any, req: Request, res: Response) => {
    try {
      const documents = await model.getModel().find();
      return res.status(200).json({
        code: 200,
        msg: ` ${model.name}s retrieved successfully.`,
        data: documents,
      });
    } catch (e: any) {
      return res.status(500).json({
        code: 500,
        msg: `Failed to retrieve ${model.name.toLowerCase()}s.`,
        error: e?.message,
      });
    }
  };

  public static getById = async (model: any, req: Request, res: Response) => {
    try {
      const id = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          code: 400,
          msg: "Invalid id",
        });
      }
      const document = await model.getModel().findById(id);
      if (!document) {
        return res.status(404).json({
          code: 404,
          msg: `${model.name} not found`,
        });
      }
      return res.status(200).json({
        code: 200,
        msg: `${model.name} retrieved successfully.`,
        data: document,
      });
    } catch (e: any) {
      return res.status(500).json({
        code: 500,
        msg: `Failed to retrieve ${model.name.toLowerCase()}.`,
        error: e?.message,
      });
    }
  };

  public static deleteAll = async (model: any, req: Request, res: Response) => {
    try {
      const deletedDocuments = await model.getModel().deleteMany();
      return res.status(200).json({
        code: 200,
        msg: `All ${model.name}s deleted successfully.`,
        data: deletedDocuments,
      });
    } catch (e: any) {
      return res.status(500).json({
        code: 500,
        msg: `Failed to delete all ${model.name.toLowerCase()}s.`,
        error: e?.message,
      });
    }
  };

  public static deleteById = async (
    model: any,
    req: Request,
    res: Response
  ) => {
    const id = req.params.id;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          code: 400,
          msg: "Invalid id",
        });
      }
      const deletedDocument = await model.getModel().findByIdAndDelete(id);
      if (!deletedDocument) {
        return res.status(404).json({
          code: 404,
          msg: `${model.name} not found`,
        });
      }
      return res.status(200).json({
        code: 200,
        msg: `${model.name} deleted successfully.`,
        data: deletedDocument,
      });
    } catch (e: any) {
      return res.status(500).json({
        code: 500,
        msg: `Failed to delete ${model.name.toLowerCase()}.`,
        error: e?.message,
      });
    }
  };

  public static updateById = async (
    model: any,
    req: Request,
    res: Response
  ) => {
    const id = req.params.id;
    const updateDocument = req.body;
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          code: 400,
          msg: "Invalid id.",
        });
      }
      const document = await model.getModel().findById(id);
      if (!document) {
        return res.status(404).json({
          code: 404,
          msg: `${model.name} not found`,
        });
      }
      //test
      Object.keys(updateDocument).forEach((property) => {
        if (property in model.getModel().schema.paths) {
          document[property] = updateDocument[property];
        }
      });
      const updatedDocument = await document.save();
      return res.status(200).json({
        code: 200,
        msg: `${model.name} updated successfully.`,
        data: updatedDocument,
      });
    } catch (e: any) {
      return res.status(500).json({
        code: 500,
        msg: `Failed to update ${model.name.toLowerCase()}.`,
        error: e?.message,
      });
    }
  };

  public static create = async (model: any, req: Request, res: Response) => {
    const documentData = req.body;
    try {
      const document = await model.getModel().create(documentData);
      return res.status(201).json({
        code: 201,
        msg: `${model.name} added successfully.`,
        data: document,
      });
    } catch (e: any) {
      return res.status(500).json({
        code: 500,
        msg: `Failed to add ${model.name.toLowerCase()}.`,
        error: e?.message,
      });
    }
  };
}
