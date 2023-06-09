const Name = require("../models/NameModel");
const mongoose = require("mongoose");

exports.getAllNames = (req, res) => {
  try {
    Name.find({})
      .then((names) => {
        res.status(200).json({
          code: 200,
          msg: "Names retrieved successfully!",
          data: names,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve names.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve names.",
    });
  }
};

exports.getNameById = (req, res) => {
  try {
    const nameId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(nameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Name.findById(nameId)
      .then((name) => {
        if (!name) {
          return res.status(404).json({
            code: 404,
            msg: "Name not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Name retrieved successfully!",
          data: name,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve name.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve name.",
    });
  }
};

exports.deleteAllNames = (req, res) => {
  try {
    Name.deleteMany({})
      .then((deletedNames) => {
        return res.status(200).json({
          code: 200,
          msg: "All names deleted successfully!",
          data: deletedNames,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all names.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all names.",
    });
  }
};

exports.deleteNameById = (req, res) => {
  const nameId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(nameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Name.findByIdAndDelete(nameId)
      .then((deletedName) => {
        if (!deletedName) {
          return res.status(404).json({
            code: 404,
            msg: "Name not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Name deleted successfully!",
          data: deletedName,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete name.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete name.",
    });
  }
};

exports.updateNameById = (req, res) => {
  const nameId = req.params.id;
  const newName = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(nameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Name.findById(nameId)
      .then((name) => {
        if (!name) {
          return res.status(404).json({
            code: 404,
            msg: "Name not found",
          });
        }
        Object.keys(newName).forEach((property) => {
          name[property] = newName[property];
        });
        name
          .save()
          .then((updatedName) =>
            res.status(200).json({
              code: 200,
              msg: "Name updated successfully!",
              data: updatedName,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update name.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update name.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update name.",
    });
  }
};

exports.addName = async (req, res) => {
  const nameData = req.body;
  try {
    Name.create(nameData)
      .then((name) => {
        res.status(201).json({
          code: 201,
          msg: "Name added successfully!",
          data: name,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add name.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add name.",
    });
  }
};
