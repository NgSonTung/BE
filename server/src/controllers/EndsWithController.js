const EndsWith = require("../models/EndsWithModel");
const mongoose = require("mongoose");

exports.getAllEndsWiths = (req, res) => {
  try {
    EndsWith.find({})
      .then((endsWiths) => {
        res.status(200).json({
          code: 200,
          msg: "EndsWiths retrieved successfully!",
          data: endsWiths,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve endsWiths.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve endsWiths.",
    });
  }
};

exports.getEndsWithById = (req, res) => {
  try {
    const endsWithId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(endsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    EndsWith.findById(endsWithId)
      .then((endsWith) => {
        if (!endsWith) {
          return res.status(404).json({
            code: 404,
            msg: "EndsWith not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "EndsWith retrieved successfully!",
          data: endsWith,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve endsWith.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve endsWith.",
    });
  }
};

exports.deleteAllEndsWiths = (req, res) => {
  try {
    EndsWith.deleteMany({ deletedEndsWiths })
      .then(() => {
        return res.status(200).json({
          code: 200,
          msg: "All endsWiths deleted successfully!",
          data: deletedEndsWiths,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all endsWiths.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all endsWiths.",
    });
  }
};

exports.deleteEndsWithById = (req, res) => {
  const endsWithId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(endsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    EndsWith.findByIdAndDelete(endsWithId)
      .then((deletedEndsWith) => {
        if (!deletedEndsWith) {
          return res.status(404).json({
            code: 404,
            msg: "EndsWith not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "EndsWith deleted successfully!",
          data: deletedEndsWith,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete endsWith.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete endsWith.",
    });
  }
};

exports.updateEndsWithById = (req, res) => {
  const endsWithId = req.params.id;
  const newEndsWith = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(endsWithId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    EndsWith.findById(endsWithId)
      .then((endsWith) => {
        if (!endsWith) {
          return res.status(404).json({
            code: 404,
            msg: "EndsWith not found",
          });
        }
        Object.keys(newEndsWith).forEach((property) => {
          endsWith[property] = newEndsWith[property];
        });
        endsWith
          .save()
          .then((updatedEndsWith) =>
            res.status(200).json({
              code: 200,
              msg: "EndsWith updated successfully!",
              data: updatedEndsWith,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update endsWith.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update endsWith.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update endsWith.",
    });
  }
};

exports.addEndsWith = async (req, res) => {
  const endsWithData = req.body;
  try {
    EndsWith.create(endsWithData)
      .then((endsWith) => {
        res.status(201).json({
          code: 201,
          msg: "EndsWith added successfully!",
          data: endsWith,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add endsWith.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add endsWith.",
    });
  }
};
