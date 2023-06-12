import { Schema, Types, model, Model } from "mongoose";

export interface ICategory {
  category: string;
  typeId: Types.ObjectId[];
}

const categorySchema = new Schema<ICategory>(
  {
    category: { type: String, required: true },
    typeId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "type",
        },
      ],
      required: true,
      validate: {
        validator: (value: Types.ObjectId[]) => value.length > 0,
        message: "typeId is required!",
      },
    },
  },
  { collection: "category" }
);

export class Category {
  private static model: Model<ICategory> = model<ICategory>(
    "category",
    categorySchema
  );

  public static getModel(): Model<ICategory> {
    return this.model;
  }
}
