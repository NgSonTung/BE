const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/CategoryController");

router
  .route("/")
  .get(categoryController.getAllCategories)
  .delete(categoryController.deleteAllCategories)
  .post(categoryController.addCategory);
router
  .route("/:id")
  .get(categoryController.getCategoryById)
  .delete(categoryController.deleteCategoryById)
  .patch(categoryController.updateCategoryById);

module.exports = router;
