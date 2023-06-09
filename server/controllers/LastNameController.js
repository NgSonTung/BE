const LastName = require("../models/LastNameModel");
const mongoose = require("mongoose");

exports.getAllLastNames = (req, res) => {
  try {
    LastName.find({})
      .then((lastNames) => {
        res.status(200).json({
          code: 200,
          msg: "LastNames retrieved successfully!",
          data: lastNames,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve lastNames.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve lastNames.",
    });
  }
};

exports.getLastNameById = (req, res) => {
  try {
    const lastNameId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(lastNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    LastName.findById(lastNameId)
      .then((lastName) => {
        if (!lastName) {
          return res.status(404).json({
            code: 404,
            msg: "LastName not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "LastName retrieved successfully!",
          data: lastName,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve lastName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve lastName.",
    });
  }
};

exports.deleteAllLastNames = (req, res) => {
  try {
    LastName.deleteMany({})
      .then((deletedLastNames) => {
        return res.status(200).json({
          code: 200,
          msg: "All lastNames deleted successfully!",
          data: deletedLastNames,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all lastNames.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all lastNames.",
    });
  }
};

exports.deleteLastNameById = (req, res) => {
  const lastNameId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(lastNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    LastName.findByIdAndDelete(lastNameId)
      .then((deletedLastName) => {
        if (!deletedLastName) {
          return res.status(404).json({
            code: 404,
            msg: "LastName not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "LastName deleted successfully!",
          data: deletedLastName,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete lastName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete lastName.",
    });
  }
};

exports.updateLastNameById = (req, res) => {
  const lastNameId = req.params.id;
  const newLastName = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(lastNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    LastName.findById(lastNameId)
      .then((lastName) => {
        if (!lastName) {
          return res.status(404).json({
            code: 404,
            msg: "LastName not found",
          });
        }
        Object.keys(newLastName).forEach((property) => {
          lastName[property] = newLastName[property];
        });
        lastName
          .save()
          .then((updatedLastName) =>
            res.status(200).json({
              code: 200,
              msg: "LastName updated successfully!",
              data: updatedLastName,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update lastName.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update lastName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update lastName.",
    });
  }
};

exports.addLastName = async (req, res) => {
  const lastNameData = req.body;
  try {
    LastName.create(lastNameData)
      .then((lastName) => {
        res.status(201).json({
          code: 201,
          msg: "LastName added successfully!",
          data: lastName,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add lastName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add lastName.",
    });
  }
};
