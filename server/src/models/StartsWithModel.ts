import { Schema, Types, model } from "mongoose";

interface IStartsWith {
  startsWith: string;
  typeId: [Types.ObjectId];
}

const startsWithSchema = new Schema<IStartsWith>(
  {
    startsWith: { type: String, required: true },
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
  { collection: "startsWith" }
);

export const StartsWith = model("startsWith", startsWithSchema);
