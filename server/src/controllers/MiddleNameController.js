const MiddleName = require("../models/MiddleNameModel");
const mongoose = require("mongoose");

exports.getAllMiddleNames = (req, res) => {
  try {
    MiddleName.find({})
      .then((middleNames) => {
        res.status(200).json({
          code: 200,
          msg: "MiddleNames retrieved successfully!",
          data: middleNames,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve middleNames.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve middleNames.",
    });
  }
};

exports.getMiddleNameById = (req, res) => {
  try {
    const middleNameId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(middleNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    MiddleName.findById(middleNameId)
      .then((middleName) => {
        if (!middleName) {
          return res.status(404).json({
            code: 404,
            msg: "MiddleName not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "MiddleName retrieved successfully!",
          data: middleName,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve middleName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve middleName.",
    });
  }
};

exports.deleteAllMiddleNames = (req, res) => {
  try {
    MiddleName.deleteMany({})
      .then((deletedMiddleNames) => {
        return res.status(200).json({
          code: 200,
          msg: "All middleNames deleted successfully!",
          data: deletedMiddleNames,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all middleNames.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all middleNames.",
    });
  }
};

exports.deleteMiddleNameById = (req, res) => {
  const middleNameId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(middleNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    MiddleName.findByIdAndDelete(middleNameId)
      .then((deletedMiddleName) => {
        if (!deletedMiddleName) {
          return res.status(404).json({
            code: 404,
            msg: "MiddleName not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "MiddleName deleted successfully!",
          data: deletedMiddleName,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete middleName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete middleName.",
    });
  }
};

exports.updateMiddleNameById = (req, res) => {
  const middleNameId = req.params.id;
  const newMiddleName = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(middleNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    MiddleName.findById(middleNameId)
      .then((middleName) => {
        if (!middleName) {
          return res.status(404).json({
            code: 404,
            msg: "MiddleName not found",
          });
        }
        Object.keys(newMiddleName).forEach((property) => {
          middleName[property] = newMiddleName[property];
        });
        middleName
          .save()
          .then((updatedMiddleName) =>
            res.status(200).json({
              code: 200,
              msg: "MiddleName updated successfully!",
              data: updatedMiddleName,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update middleName.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update middleName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update middleName.",
    });
  }
};

exports.addMiddleName = async (req, res) => {
  const middleNameData = req.body;
  try {
    MiddleName.create(middleNameData)
      .then((middleName) => {
        res.status(201).json({
          code: 201,
          msg: "MiddleName added successfully!",
          data: middleName,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add middleName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add middleName.",
    });
  }
};
