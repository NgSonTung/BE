const Gender = require("../models/GenderModel");
const mongoose = require("mongoose");

exports.getAllGenders = (req, res) => {
  try {
    Gender.find({})
      .then((genders) => {
        res.status(200).json({
          code: 200,
          msg: "Genders retrieved successfully!",
          data: genders,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve genders.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve genders.",
    });
  }
};

exports.getGenderById = (req, res) => {
  try {
    const genderId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(genderId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Gender.findById(genderId)
      .then((gender) => {
        if (!gender) {
          return res.status(404).json({
            code: 404,
            msg: "Gender not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Gender retrieved successfully!",
          data: gender,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve gender.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve gender.",
    });
  }
};

exports.deleteAllGenders = (req, res) => {
  try {
    Gender.deleteMany({})
      .then((deletedGenders) => {
        return res.status(200).json({
          code: 200,
          msg: "All genders deleted successfully!",
          data: deletedGenders,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all genders.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all genders.",
    });
  }
};

exports.deleteGenderById = (req, res) => {
  const genderId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(genderId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Gender.findByIdAndDelete(genderId)
      .then((deletedGender) => {
        if (!deletedGender) {
          return res.status(404).json({
            code: 404,
            msg: "Gender not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Gender deleted successfully!",
          data: deletedGender,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete gender.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete gender.",
    });
  }
};

exports.updateGenderById = (req, res) => {
  const genderId = req.params.id;
  const newGender = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(genderId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Gender.findById(genderId)
      .then((gender) => {
        if (!gender) {
          return res.status(404).json({
            code: 404,
            msg: "Gender not found",
          });
        }
        Object.keys(newGender).forEach((property) => {
          gender[property] = newGender[property];
        });
        gender
          .save()
          .then((updatedGender) =>
            res.status(200).json({
              code: 200,
              msg: "Gender updated successfully!",
              data: updatedGender,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update gender.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update gender.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update gender.",
    });
  }
};

exports.addGender = async (req, res) => {
  const genderData = req.body;
  try {
    Gender.create(genderData)
      .then((gender) => {
        res.status(201).json({
          code: 201,
          msg: "Gender added successfully!",
          data: gender,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add gender.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add gender.",
    });
  }
};
