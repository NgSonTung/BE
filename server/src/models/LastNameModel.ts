import { Model, Schema, Types, model } from "mongoose";

export interface ILastName {
  lastName: string;
  typeId: [Types.ObjectId];
}

const lastNameSchema = new Schema<ILastName>(
  {
    lastName: { type: String, required: true },
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
  { collection: "lastName" }
);

export class LastName {
  private static model: Model<ILastName> = model<ILastName>(
    "lastName",
    lastNameSchema
  );

  public static getModel(): Model<ILastName> {
    return this.model;
  }
}
