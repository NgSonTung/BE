const express = require("express");
const router = express.Router();
const elementController = require("../controllers/ElementController");

router
  .route("/")
  .get(elementController.getAllElements)
  .delete(elementController.deleteAllElements)
  .post(elementController.addElement);
router
  .route("/:id")
  .get(elementController.getElementById)
  .delete(elementController.deleteElementById)
  .patch(elementController.updateElementById);

module.exports = router;
