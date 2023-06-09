import { Schema, Types, model } from "mongoose";

interface ICategory {
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

export const Category = model("category", categorySchema);
