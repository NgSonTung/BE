import { Model, Schema, Types, model } from "mongoose";

export interface IStartsWith {
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

export class StartsWith {
  private static model: Model<IStartsWith> = model<IStartsWith>(
    "startsWith",
    startsWithSchema
  );

  public static getModel(): Model<IStartsWith> {
    return this.model;
  }
}
