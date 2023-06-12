import { Request, Response } from "express";
import { connection } from "mongoose";

export const getAllCollections = async (req: Request, res: Response) => {
  try {
    const collections = await connection.db
      .listCollections({}, { nameOnly: true })
      .toArray();
    return res.status(200).json({
      code: 200,
      msg: "Collections retrieved successfully.",
      data: collections,
    });
  } catch (e: any) {
    return res.status(500).json({
      code: 500,
      msg: "Failed to retrieve collections.",
      error: e?.message,
    });
  }
};
