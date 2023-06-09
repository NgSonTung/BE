import { Schema, model } from "mongoose";

interface IType {
  type: string;
}

const typeSchema = new Schema<IType>(
  {
    type: { type: String, required: true },
  },
  { collection: "type" }
);

export const Type = model("type", typeSchema);
