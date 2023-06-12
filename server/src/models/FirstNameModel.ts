import { Model, Schema, Types, model } from "mongoose";

export interface IFirstName {
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

export class FirstName {
  private static model: Model<IFirstName> = model<IFirstName>(
    "firstName",
    firstNameSchema
  );

  public static getModel(): Model<IFirstName> {
    return this.model;
  }
}
