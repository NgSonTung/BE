import { Schema, Types, model } from "mongoose";

interface IZodiacSign {
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

export const ZodiacSign = model("zodiacSign", zodiacSignSchema);
