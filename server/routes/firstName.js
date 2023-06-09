const express = require("express");
const router = express.Router();
const firstNameController = require("../controllers/FirstNameController");

router
  .route("/")
  .get(firstNameController.getAllFirstNames)
  .delete(firstNameController.deleteAllFirstNames)
  .post(firstNameController.addFirstName);
router
  .route("/:id")
  .get(firstNameController.getFirstNameById)
  .delete(firstNameController.deleteFirstNameById)
  .patch(firstNameController.updateFirstNameById);

module.exports = router;
