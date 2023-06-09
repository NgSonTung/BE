const express = require("express");
const router = express.Router();
const lastNameController = require("../controllers/LastNameController");

router
  .route("/")
  .get(lastNameController.getAllLastNames)
  .delete(lastNameController.deleteAllLastNames)
  .post(lastNameController.addLastName);
router
  .route("/:id")
  .get(lastNameController.getLastNameById)
  .delete(lastNameController.deleteLastNameById)
  .patch(lastNameController.updateLastNameById);

module.exports = router;
