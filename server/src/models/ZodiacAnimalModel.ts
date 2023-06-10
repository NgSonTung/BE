import { Schema, Types, model } from "mongoose";

export interface IZodiacAnimal {
  zodiacAnimal: string;
  typeId: [Types.ObjectId];
}

const zodiacAnimalSchema = new Schema<IZodiacAnimal>(
  {
    zodiacAnimal: { type: String, required: true },
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
  { collection: "zodiacAnimal" }
);

export const ZodiacAnimal = model("zodiacAnimal", zodiacAnimalSchema);
