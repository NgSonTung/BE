import { Schema, Types, model } from "mongoose";

interface IWordCount {
  wordCount: string;
  typeId: [Types.ObjectId];
}

const wordCountSchema = new Schema<IWordCount>(
  {
    wordCount: { type: String, required: true },
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
  { collection: "wordCount" }
);

export const WordCount = model("wordCount", wordCountSchema);
