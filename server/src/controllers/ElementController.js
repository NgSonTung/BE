const Element = require("../models/ElementModel");
const mongoose = require("mongoose");

exports.getAllElements = (req, res) => {
  try {
    Element.find({})
      .then((elements) => {
        res.status(200).json({
          code: 200,
          msg: "Elements retrieved successfully!",
          data: elements,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve elements.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve elements.",
    });
  }
};

exports.getElementById = (req, res) => {
  try {
    const elementId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(elementId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Element.findById(elementId)
      .then((element) => {
        if (!element) {
          return res.status(404).json({
            code: 404,
            msg: "Element not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Element retrieved successfully!",
          data: element,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve element.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve element.",
    });
  }
};

exports.deleteAllElements = (req, res) => {
  try {
    Element.deleteMany({})
      .then((deletedElements) => {
        return res.status(200).json({
          code: 200,
          msg: "All elements deleted successfully!",
          data: deletedElements,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all elements.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all elements.",
    });
  }
};

exports.deleteElementById = (req, res) => {
  const elementId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(elementId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Element.findByIdAndDelete(elementId)
      .then((deletedElement) => {
        if (!deletedElement) {
          return res.status(404).json({
            code: 404,
            msg: "Element not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Element deleted successfully!",
          data: deletedElement,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete element.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete element.",
    });
  }
};

exports.updateElementById = (req, res) => {
  const elementId = req.params.id;
  const newElement = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(elementId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Element.findById(elementId)
      .then((element) => {
        if (!element) {
          return res.status(404).json({
            code: 404,
            msg: "Element not found",
          });
        }
        Object.keys(newElement).forEach((property) => {
          element[property] = newElement[property];
        });
        element
          .save()
          .then((updatedElement) =>
            res.status(200).json({
              code: 200,
              msg: "Element updated successfully!",
              data: updatedElement,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update element.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update element.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update element.",
    });
  }
};

exports.addElement = async (req, res) => {
  const elementData = req.body;
  try {
    Element.create(elementData)
      .then((element) => {
        res.status(201).json({
          code: 201,
          msg: "Element added successfully!",
          data: element,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add element.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add element.",
    });
  }
};
