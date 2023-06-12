import { Model, Schema, Types, model } from "mongoose";

export interface IZodiacSign {
  zodiacSign: string;
  typeId: [Types.ObjectId];
}

const zodiacSignSchema = new Schema<IZodiacSign>(
  {
    zodiacSign: { type: String, required: true },
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
  { collection: "zodiacSign" }
);

export class ZodiacSign {
  private static model: Model<IZodiacSign> = model<IZodiacSign>(
    "zodiacSign",
    zodiacSignSchema
  );

  public static getModel(): Model<IZodiacSign> {
    return this.model;
  }
}
