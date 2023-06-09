const ZodiacSign = require("../models/ZodiacSignModel");
const mongoose = require("mongoose");

exports.getAllZodiacSigns = (req, res) => {
  try {
    ZodiacSign.find({})
      .then((zodiacSigns) => {
        res.status(200).json({
          code: 200,
          msg: "ZodiacSigns retrieved successfully!",
          data: zodiacSigns,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve zodiacSigns.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve zodiacSigns.",
    });
  }
};

exports.getZodiacSignById = (req, res) => {
  try {
    const zodiacSignId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(zodiacSignId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    ZodiacSign.findById(zodiacSignId)
      .then((zodiacSign) => {
        if (!zodiacSign) {
          return res.status(404).json({
            code: 404,
            msg: "ZodiacSign not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "ZodiacSign retrieved successfully!",
          data: zodiacSign,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve zodiacSign.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve zodiacSign.",
    });
  }
};

exports.deleteAllZodiacSigns = (req, res) => {
  try {
    ZodiacSign.deleteMany({})
      .then((deletedZodiacSigns) => {
        return res.status(200).json({
          code: 200,
          msg: "All zodiacSigns deleted successfully!",
          data: deletedZodiacSigns,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all zodiacSigns.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all zodiacSigns.",
    });
  }
};

exports.deleteZodiacSignById = (req, res) => {
  const zodiacSignId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(zodiacSignId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    ZodiacSign.findByIdAndDelete(zodiacSignId)
      .then((deletedZodiacSign) => {
        if (!deletedZodiacSign) {
          return res.status(404).json({
            code: 404,
            msg: "ZodiacSign not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "ZodiacSign deleted successfully!",
          data: deletedZodiacSign,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete zodiacSign.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete zodiacSign.",
    });
  }
};

exports.updateZodiacSignById = (req, res) => {
  const zodiacSignId = req.params.id;
  const newZodiacSign = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(zodiacSignId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    ZodiacSign.findById(zodiacSignId)
      .then((zodiacSign) => {
        if (!zodiacSign) {
          return res.status(404).json({
            code: 404,
            msg: "ZodiacSign not found",
          });
        }
        Object.keys(newZodiacSign).forEach((property) => {
          zodiacSign[property] = newZodiacSign[property];
        });
        zodiacSign
          .save()
          .then((updatedZodiacSign) =>
            res.status(200).json({
              code: 200,
              msg: "ZodiacSign updated successfully!",
              data: updatedZodiacSign,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update zodiacSign.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update zodiacSign.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update zodiacSign.",
    });
  }
};

exports.addZodiacSign = async (req, res) => {
  const zodiacSignData = req.body;
  try {
    ZodiacSign.create(zodiacSignData)
      .then((zodiacSign) => {
        res.status(201).json({
          code: 201,
          msg: "ZodiacSign added successfully!",
          data: zodiacSign,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add zodiacSign.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add zodiacSign.",
    });
  }
};
