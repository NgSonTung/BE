import { Schema, Types, model } from "mongoose";

interface IGender {
  gender: string;
  typeId: [Types.ObjectId];
}

const genderSchema = new Schema<IGender>(
  {
    gender: { type: String, required: true },
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
  { collection: "gender" }
);

export const Gender = model("gender", genderSchema);
