import { Model, Schema, Types, model } from "mongoose";

export interface IMiddleName {
  middleName: string;
  typeId: [Types.ObjectId];
}

const middleNameSchema = new Schema<IMiddleName>(
  {
    middleName: { type: String, required: true },
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
  { collection: "middleName" }
);

export class MiddleName {
  private static model: Model<IMiddleName> = model<IMiddleName>(
    "middleName",
    middleNameSchema
  );

  public static getModel(): Model<IMiddleName> {
    return this.model;
  }
}
