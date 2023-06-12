import { Schema, Types, model, Model } from "mongoose";

export interface IElement {
  element: string;
  typeId: [Types.ObjectId];
}

const elementSchema = new Schema<IElement>(
  {
    element: { type: String, required: true },
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
  { collection: "element" }
);

export class Element {
  private static model: Model<IElement> = model<IElement>(
    "element",
    elementSchema
  );

  public static getModel(): Model<IElement> {
    return this.model;
  }
}
