const Category = require("../models/CategoryModel");
const mongoose = require("mongoose");

exports.getAllCategories = (req, res) => {
  try {
    Category.find({})
      .then((categories) => {
        res.status(200).json({
          code: 200,
          msg: "Categories retrieved successfully!",
          data: categories,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve categories.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve categories.",
    });
  }
};

exports.getCategoryById = (req, res) => {
  try {
    const categoryId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Category.findById(categoryId)
      .then((category) => {
        if (!category) {
          return res.status(404).json({
            code: 404,
            msg: "Category not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Category retrieved successfully!",
          data: category,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve category.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve category.",
    });
  }
};

exports.deleteAllCategories = (req, res) => {
  try {
    Category.deleteMany({ deletedCategories })
      .then(() => {
        return res.status(200).json({
          code: 200,
          msg: "All categories deleted successfully!",
          data: deletedCategories,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all categories.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all categories.",
    });
  }
};

exports.deleteCategoryById = (req, res) => {
  const categoryId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Category.findByIdAndDelete(categoryId)
      .then((deletedCategory) => {
        if (!deletedCategory) {
          return res.status(404).json({
            code: 404,
            msg: "Category not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "Category deleted successfully!",
          data: deletedCategory,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete category.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete category.",
    });
  }
};

exports.updateCategoryById = (req, res) => {
  const categoryId = req.params.id;
  const newCategory = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    Category.findById(categoryId)
      .then((category) => {
        if (!category) {
          return res.status(404).json({
            code: 404,
            msg: "Category not found",
          });
        }
        Object.keys(newCategory).forEach((property) => {
          category[property] = newCategory[property];
        });
        category
          .save()
          .then((updatedCategory) =>
            res.status(200).json({
              code: 200,
              msg: "Category updated successfully!",
              data: updatedCategory,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update category.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update category.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update category.",
    });
  }
};

exports.addCategory = async (req, res) => {
  const categoryData = req.body;
  try {
    Category.create(categoryData)
      .then((category) => {
        res.status(201).json({
          code: 201,
          msg: "Category added successfully!",
          data: category,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add category.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add category.",
    });
  }
};
