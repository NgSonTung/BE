const Ethnicity = require("../models/EthnicityModel");
const mongoose = require("mongoose");

exports.getAllEthnicities = (req, res) => {
  try {
    Ethnicity.find({})
      .then((ethnicities) => {
        res.status(200).json({
          code: 200,
          msg: "Ethnicities retrieved successfully!",
          data: ethnicities,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve ethnicities.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve ethnicities.",
    });
  }
};

exports.getEthnicityById = (req, res) => {
  try {
    const ethnicityId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(ethnicityId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Ethnicity.findById(ethnicityId)
      .then((ethnicity) => {
        if (!ethnicity) {
          return res.status(404).json({
            code: 404,
            msg: "Ethnicity not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Ethnicity retrieved successfully!",
          data: ethnicity,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve ethnicity.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve ethnicity.",
    });
  }
};

exports.deleteAllEthnicities = (req, res) => {
  try {
    Ethnicity.deleteMany({})
      .then((deletedEthnicities) => {
        return res.status(200).json({
          code: 200,
          msg: "All ethnicities deleted successfully!",
          data: deletedEthnicities,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all ethnicities.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all ethnicities.",
    });
  }
};

exports.deleteEthnicityById = (req, res) => {
  const ethnicityId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(ethnicityId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Ethnicity.findByIdAndDelete(ethnicityId)
      .then((deletedEthnicity) => {
        if (!deletedEthnicity) {
          return res.status(404).json({
            code: 404,
            msg: "Ethnicity not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Ethnicity deleted successfully!",
          data: deletedEthnicity,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete ethnicity.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete ethnicity.",
    });
  }
};

exports.updateEthnicityById = (req, res) => {
  const ethnicityId = req.params.id;
  const newEthnicity = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(ethnicityId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Ethnicity.findById(ethnicityId)
      .then((ethnicity) => {
        if (!ethnicity) {
          return res.status(404).json({
            code: 404,
            msg: "Ethnicity not found",
          });
        }
        Object.keys(newEthnicity).forEach((property) => {
          ethnicity[property] = newEthnicity[property];
        });
        ethnicity
          .save()
          .then((updatedEthnicity) =>
            res.status(200).json({
              code: 200,
              msg: "Ethnicity updated successfully!",
              data: updatedEthnicity,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update ethnicity.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update ethnicity.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update ethnicity.",
    });
  }
};

exports.addEthnicity = async (req, res) => {
  const ethnicityData = req.body;
  try {
    Ethnicity.create(ethnicityData)
      .then((ethnicity) => {
        res.status(201).json({
          code: 201,
          msg: "Ethnicity added successfully!",
          data: ethnicity,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add ethnicity.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add ethnicity.",
    });
  }
};
