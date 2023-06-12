import { Model, Schema, Types, model } from "mongoose";

export interface IMeaning {
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

export class Meaning {
  private static model: Model<IMeaning> = model<IMeaning>(
    "meaning",
    meaningSchema
  );

  public static getModel(): Model<IMeaning> {
    return this.model;
  }
}
