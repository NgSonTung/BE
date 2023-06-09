const Type = require("../models/TypeModel");
const mongoose = require("mongoose");

exports.getAllTypes = (req, res) => {
  try {
    Type.find({})
      .then((types) => {
        console.log(types);
        res.status(200).json({
          code: 200,
          msg: "Types retrieved successfully!",
          data: types,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve types.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve types.",
    });
  }
};

exports.getTypeById = (req, res) => {
  try {
    const typeId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(typeId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Type.findById(typeId)
      .then((type) => {
        if (!type) {
          return res.status(404).json({
            code: 404,
            msg: "Type not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Type retrieved successfully!",
          data: type,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve type.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve type.",
    });
  }
};

exports.deleteAllTypes = (req, res) => {
  try {
    Type.deleteMany({})
      .then((deletedTypes) => {
        return res.status(200).json({
          code: 200,
          msg: "All types deleted successfully!",
          data: deletedTypes,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all types.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all types.",
    });
  }
};

exports.deleteTypeById = (req, res) => {
  const typeId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(typeId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Type.findByIdAndDelete(typeId)
      .then((deletedType) => {
        if (!deletedType) {
          return res.status(404).json({
            code: 404,
            msg: "Type not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Type deleted successfully!",
          data: deletedType,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete type.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete type.",
    });
  }
};

exports.updateTypeById = (req, res) => {
  const typeId = req.params.id;
  const newType = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(typeId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Type.findById(typeId)
      .then((type) => {
        if (!type) {
          return res.status(404).json({
            code: 404,
            msg: "Type not found",
          });
        }
        Object.keys(newType).forEach((property) => {
          type[property] = newType[property];
        });
        type
          .save()
          .then((updatedType) =>
            res.status(200).json({
              code: 200,
              msg: "Type updated successfully!",
              data: updatedType,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update type.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update type.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update type.",
    });
  }
};

exports.addType = async (req, res) => {
  const typeData = req.body;
  try {
    Type.create(typeData)
      .then((type) => {
        res.status(201).json({
          code: 201,
          msg: "Type added successfully!",
          data: type,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add type.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add type.",
    });
  }
};
