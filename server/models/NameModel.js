const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema(
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
          type: mongoose.Schema.Types.ObjectId,
          ref: "type",
        },
      ],
      required: true,
      validate: {
        validator: (value) => value.length > 0,
        message: "typeId is required!",
      },
    },
    ethnicityId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "ethnicity",
        },
      ],
    },
    genderId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "gender",
        },
      ],
    },
    firstNameId: { type: mongoose.SchemaTypes.ObjectId, ref: "firstName" },
    middleNameId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "middleName",
        },
      ],
    },
    lastNameId: { type: mongoose.SchemaTypes.ObjectId, ref: "firstName" },
    wordCountId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "wordCount",
        },
      ],
    },
    meaningId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "meaning",
        },
      ],
    },
    zodiacSignId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "zodiacSign",
        },
      ],
    },
    zodiacAnimalId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "zodiacAnimal",
        },
      ],
    },
    elementId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "element",
        },
      ],
    },
    startsWithId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "startsWith",
        },
      ],
    },
    endsWithId: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "startsWith",
        },
      ],
    },
  },
  { collection: "name" }
);

const Name = mongoose.model("name", nameSchema);

module.exports = Name;
