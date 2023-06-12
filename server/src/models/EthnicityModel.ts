import { Schema, Types, model, Model } from "mongoose";

export interface IEthnicity {
  ethnicity: string;
  typeId: [Types.ObjectId];
}

const ethnicitySchema = new Schema<IEthnicity>(
  {
    ethnicity: { type: String, required: true },
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
  { collection: "ethnicity" }
);

export class Ethnicity {
  private static model: Model<IEthnicity> = model<IEthnicity>(
    "ethnicity",
    ethnicitySchema
  );

  public static getModel(): Model<IEthnicity> {
    return this.model;
  }
}
