import { Schema, Types, model } from "mongoose";

interface IName {
  name: string;
  createdAt: Date;
  description: string;
  firstNameId: Types.ObjectId;
  lastNameId: Types.ObjectId;
  middleNameId: [Types.ObjectId];
  elementId: [Types.ObjectId];
  categoryId: [Types.ObjectId];
  zodiacAnimalId: [Types.ObjectId];
  zodiacSignId: [Types.ObjectId];
  meaningId: [Types.ObjectId];
  wordCountId: [Types.ObjectId];
  genderId: [Types.ObjectId];
  ethnicityId: [Types.ObjectId];
  typeId: [Types.ObjectId];
  startsWithId: [Types.ObjectId];
  endsWithId: [Types.ObjectId];
}

const nameSchema = new Schema<IName>(
  {
    name: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
    description: {
      type: String,
      required: true,
    },
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
    categoryId: {
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
    ethnicityId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "ethnicity",
        },
      ],
    },
    genderId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "gender",
        },
      ],
    },
    firstNameId: { type: Schema.Types.ObjectId, ref: "firstName" },
    middleNameId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "middleName",
        },
      ],
    },
    lastNameId: { type: Schema.Types.ObjectId, ref: "firstName" },
    wordCountId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "wordCount",
        },
      ],
    },
    meaningId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "meaning",
        },
      ],
    },
    zodiacSignId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "zodiacSign",
        },
      ],
    },
    zodiacAnimalId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "zodiacAnimal",
        },
      ],
    },
    elementId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "element",
        },
      ],
    },
    startsWithId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "startsWith",
        },
      ],
    },
    endsWithId: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "startsWith",
        },
      ],
    },
  },
  { collection: "name" }
);

const Name = model("name", nameSchema);

module.exports = Name;
