const Meaning = require("../models/MeaningModel");
const mongoose = require("mongoose");

exports.getAllMeanings = (req, res) => {
  try {
    Meaning.find({})
      .then((meanings) => {
        res.status(200).json({
          code: 200,
          msg: "Meanings retrieved successfully!",
          data: meanings,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve meanings.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve meanings.",
    });
  }
};

exports.getMeaningById = (req, res) => {
  try {
    const meaningId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(meaningId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Meaning.findById(meaningId)
      .then((meaning) => {
        if (!meaning) {
          return res.status(404).json({
            code: 404,
            msg: "Meaning not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Meaning retrieved successfully!",
          data: meaning,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve meaning.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve meaning.",
    });
  }
};

exports.deleteAllMeanings = (req, res) => {
  try {
    Meaning.deleteMany({})
      .then((deletedMeanings) => {
        return res.status(200).json({
          code: 200,
          msg: "All meanings deleted successfully!",
          data: deletedMeanings,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all meanings.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all meanings.",
    });
  }
};

exports.deleteMeaningById = (req, res) => {
  const meaningId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(meaningId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Meaning.findByIdAndDelete(meaningId)
      .then((deletedMeaning) => {
        if (!deletedMeaning) {
          return res.status(404).json({
            code: 404,
            msg: "Meaning not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Meaning deleted successfully!",
          data: deletedMeaning,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete meaning.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete meaning.",
    });
  }
};

exports.updateMeaningById = (req, res) => {
  const meaningId = req.params.id;
  const newMeaning = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(meaningId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Meaning.findById(meaningId)
      .then((meaning) => {
        if (!meaning) {
          return res.status(404).json({
            code: 404,
            msg: "Meaning not found",
          });
        }
        Object.keys(newMeaning).forEach((property) => {
          meaning[property] = newMeaning[property];
        });
        meaning
          .save()
          .then((updatedMeaning) =>
            res.status(200).json({
              code: 200,
              msg: "Meaning updated successfully!",
              data: updatedMeaning,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update meaning.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update meaning.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update meaning.",
    });
  }
};

exports.addMeaning = async (req, res) => {
  const meaningData = req.body;
  try {
    Meaning.create(meaningData)
      .then((meaning) => {
        res.status(201).json({
          code: 201,
          msg: "Meaning added successfully!",
          data: meaning,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add meaning.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add meaning.",
    });
  }
};
