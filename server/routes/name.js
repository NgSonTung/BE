const express = require("express");
const router = express.Router();
const nameController = require("../controllers/NameController");

router
  .route("/")
  .get(nameController.getAllNames)
  .delete(nameController.deleteAllNames)
  .post(nameController.addName);
router
  .route("/:id")
  .get(nameController.getNameById)
  .delete(nameController.deleteNameById)
  .patch(nameController.updateNameById);

module.exports = router;
