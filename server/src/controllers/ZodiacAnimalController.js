const ZodiacAnimal = require("../models/ZodiacAnimalModel");
const mongoose = require("mongoose");

exports.getAllZodiacAnimals = (req, res) => {
  try {
    ZodiacAnimal.find({})
      .then((zodiacAnimals) => {
        res.status(200).json({
          code: 200,
          msg: "ZodiacAnimals retrieved successfully!",
          data: zodiacAnimals,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve zodiacAnimals.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve zodiacAnimals.",
    });
  }
};

exports.getZodiacAnimalById = (req, res) => {
  try {
    const zodiacAnimalId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(zodiacAnimalId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    ZodiacAnimal.findById(zodiacAnimalId)
      .then((zodiacAnimal) => {
        if (!zodiacAnimal) {
          return res.status(404).json({
            code: 404,
            msg: "ZodiacAnimal not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "ZodiacAnimal retrieved successfully!",
          data: zodiacAnimal,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve zodiacAnimal.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve zodiacAnimal.",
    });
  }
};

exports.deleteAllZodiacAnimals = (req, res) => {
  try {
    ZodiacAnimal.deleteMany({})
      .then((deletedZodiacAnimals) => {
        return res.status(200).json({
          code: 200,
          msg: "All zodiacAnimals deleted successfully!",
          data: deletedZodiacAnimals,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all zodiacAnimals.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all zodiacAnimals.",
    });
  }
};

exports.deleteZodiacAnimalById = (req, res) => {
  const zodiacAnimalId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(zodiacAnimalId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    ZodiacAnimal.findByIdAndDelete(zodiacAnimalId)
      .then((deletedZodiacAnimal) => {
        if (!deletedZodiacAnimal) {
          return res.status(404).json({
            code: 404,
            msg: "ZodiacAnimal not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "ZodiacAnimal deleted successfully!",
          data: deletedZodiacAnimal,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete zodiacAnimal.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete zodiacAnimal.",
    });
  }
};

exports.updateZodiacAnimalById = (req, res) => {
  const zodiacAnimalId = req.params.id;
  const newZodiacAnimal = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(zodiacAnimalId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    ZodiacAnimal.findById(zodiacAnimalId)
      .then((zodiacAnimal) => {
        if (!zodiacAnimal) {
          return res.status(404).json({
            code: 404,
            msg: "ZodiacAnimal not found",
          });
        }
        Object.keys(newZodiacAnimal).forEach((property) => {
          zodiacAnimal[property] = newZodiacAnimal[property];
        });
        zodiacAnimal
          .save()
          .then((updatedZodiacAnimal) =>
            res.status(200).json({
              code: 200,
              msg: "ZodiacAnimal updated successfully!",
              data: updatedZodiacAnimal,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update zodiacAnimal.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update zodiacAnimal.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update zodiacAnimal.",
    });
  }
};

exports.addZodiacAnimal = async (req, res) => {
  const zodiacAnimalData = req.body;
  try {
    ZodiacAnimal.create(zodiacAnimalData)
      .then((zodiacAnimal) => {
        res.status(201).json({
          code: 201,
          msg: "ZodiacAnimal added successfully!",
          data: zodiacAnimal,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add zodiacAnimal.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add zodiacAnimal.",
    });
  }
};
