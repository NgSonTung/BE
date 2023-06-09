const express = require("express");
const router = express.Router();
const middleNameController = require("../controllers/MiddleNameController");

router
  .route("/")
  .get(middleNameController.getAllMiddleNames)
  .delete(middleNameController.deleteAllMiddleNames)
  .post(middleNameController.addMiddleName);
router
  .route("/:id")
  .get(middleNameController.getMiddleNameById)
  .delete(middleNameController.deleteMiddleNameById)
  .patch(middleNameController.updateMiddleNameById);

module.exports = router;
