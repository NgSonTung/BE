import { Schema, Types, model } from "mongoose";

export interface IEndsWith {
  endsWith: string;
  typeId: [Types.ObjectId];
}

const endsWithSchema = new Schema<IEndsWith>(
  {
    endsWith: { type: String, required: true },
    typeId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "type",
        },
      ],
      required: true,
      validate: {
        validator: (value: [Types.ObjectId]) => value.length > 0,
        message: "typeId is required!",
      },
    },
  },
  { collection: "endsWith" }
);

export const EndsWith = model("endsWith", endsWithSchema);
