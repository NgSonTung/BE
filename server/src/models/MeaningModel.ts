import { Schema, Types, model } from "mongoose";

interface IMeaning {
  meaning: string;
  typeId: [Types.ObjectId];
}

const meaningSchema = new Schema<IMeaning>(
  {
    meaning: { type: String, required: true },
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
  { collection: "meaning" }
);

export const Meaning = model("meaning", meaningSchema);
