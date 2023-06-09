const express = require("express");
const router = express.Router();
const typeController = require("../controllers/TypeController");

router
  .route("/")
  .get(typeController.getAllTypes)
  .delete(typeController.deleteAllTypes)
  .post(typeController.addType);
router
  .route("/:id")
  .get(typeController.getTypeById)
  .delete(typeController.deleteTypeById)
  .patch(typeController.updateTypeById);

module.exports = router;
