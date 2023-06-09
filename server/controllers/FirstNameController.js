const FirstName = require("../models/FirstNameModel");
const mongoose = require("mongoose");

exports.getAllFirstNames = (req, res) => {
  try {
    FirstName.find({})
      .then((firstNames) => {
        res.status(200).json({
          code: 200,
          msg: "FirstNames retrieved successfully!",
          data: firstNames,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve firstNames.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve firstNames.",
    });
  }
};

exports.getFirstNameById = (req, res) => {
  try {
    const firstNameId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(firstNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    FirstName.findById(firstNameId)
      .then((firstName) => {
        if (!firstName) {
          return res.status(404).json({
            code: 404,
            msg: "FirstName not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "FirstName retrieved successfully!",
          data: firstName,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve firstName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve firstName.",
    });
  }
};

exports.deleteAllFirstNames = (req, res) => {
  try {
    FirstName.deleteMany({})
      .then((deletedFirstNames) => {
        return res.status(200).json({
          code: 200,
          msg: "All firstNames deleted successfully!",
          data: deletedFirstNames,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all firstNames.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all firstNames.",
    });
  }
};

exports.deleteFirstNameById = (req, res) => {
  const firstNameId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(firstNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    FirstName.findByIdAndDelete(firstNameId)
      .then((deletedFirstName) => {
        if (!deletedFirstName) {
          return res.status(404).json({
            code: 404,
            msg: "FirstName not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "FirstName deleted successfully!",
          data: deletedFirstName,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete firstName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete firstName.",
    });
  }
};

exports.updateFirstNameById = (req, res) => {
  const firstNameId = req.params.id;
  const newFirstName = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(firstNameId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    FirstName.findById(firstNameId)
      .then((firstName) => {
        if (!firstName) {
          return res.status(404).json({
            code: 404,
            msg: "FirstName not found",
          });
        }
        Object.keys(newFirstName).forEach((property) => {
          firstName[property] = newFirstName[property];
        });
        firstName
          .save()
          .then((updatedFirstName) =>
            res.status(200).json({
              code: 200,
              msg: "FirstName updated successfully!",
              data: updatedFirstName,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update firstName.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update firstName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update firstName.",
    });
  }
};

exports.addFirstName = async (req, res) => {
  const firstNameData = req.body;
  try {
    FirstName.create(firstNameData)
      .then((firstName) => {
        res.status(201).json({
          code: 201,
          msg: "FirstName added successfully!",
          data: firstName,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add firstName.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add firstName.",
    });
  }
};
