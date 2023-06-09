import { Schema, Types, model } from "mongoose";

interface IFirstName {
  firstName: string;
  typeId: [Types.ObjectId];
}

const firstNameSchema = new Schema<IFirstName>(
  {
    firstName: { type: String, required: true },
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
  { collection: "firstName" }
);

export const FirstName = model("firstName", firstNameSchema);
