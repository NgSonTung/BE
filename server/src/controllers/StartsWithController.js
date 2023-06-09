const StartsWith = require("../models/StartsWithModel");
const mongoose = require("mongoose");

exports.getAllStartsWiths = (req, res) => {
  try {
    StartsWith.find({})
      .then((startsWiths) => {
        res.status(200).json({
          code: 200,
          msg: "StartsWiths retrieved successfully!",
          data: startsWiths,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve startsWiths.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve startsWiths.",
    });
  }
};

exports.getStartsWithById = (req, res) => {
  try {
    const startsWithId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(startsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    StartsWith.findById(startsWithId)
      .then((startsWith) => {
        if (!startsWith) {
          return res.status(404).json({
            code: 404,
            msg: "StartsWith not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "StartsWith retrieved successfully!",
          data: startsWith,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve startsWith.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve startsWith.",
    });
  }
};

exports.deleteAllStartsWiths = (req, res) => {
  try {
    StartsWith.deleteMany({})
      .then((deletedStartsWiths) => {
        return res.status(200).json({
          code: 200,
          msg: "All startsWiths deleted successfully!",
          data: deletedStartsWiths,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all startsWiths.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all startsWiths.",
    });
  }
};

exports.deleteStartsWithById = (req, res) => {
  const startsWithId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(startsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    StartsWith.findByIdAndDelete(startsWithId)
      .then((deletedStartsWith) => {
        if (!deletedStartsWith) {
          return res.status(404).json({
            code: 404,
            msg: "StartsWith not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "StartsWith deleted successfully!",
          data: deletedStartsWith,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete startsWith.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete startsWith.",
    });
  }
};

exports.updateStartsWithById = (req, res) => {
  const startsWithId = req.params.id;
  const newStartsWith = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(startsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    StartsWith.findById(startsWithId)
      .then((startsWith) => {
        if (!startsWith) {
          return res.status(404).json({
            code: 404,
            msg: "StartsWith not found",
          });
        }
        Object.keys(newStartsWith).forEach((property) => {
          startsWith[property] = newStartsWith[property];
        });
        startsWith
          .save()
          .then((updatedStartsWith) =>
            res.status(200).json({
              code: 200,
              msg: "StartsWith updated successfully!",
              data: updatedStartsWith,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update startsWith.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update startsWith.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update startsWith.",
    });
  }
};

exports.addStartsWith = async (req, res) => {
  const startsWithData = req.body;
  try {
    StartsWith.create(startsWithData)
      .then((startsWith) => {
        res.status(201).json({
          code: 201,
          msg: "StartsWith added successfully!",
          data: startsWith,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add startsWith.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add startsWith.",
    });
  }
};
