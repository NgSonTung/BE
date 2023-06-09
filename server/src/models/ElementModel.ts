import { Schema, Types, model } from "mongoose";

interface IElement {
  element: string;
  typeId: [Types.ObjectId];
}

const elementSchema = new Schema<IElement>(
  {
    element: { type: String, required: true },
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
  { collection: "element" }
);

export const Element = model("element", elementSchema);
