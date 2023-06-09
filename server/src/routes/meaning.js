const express = require("express");
const router = express.Router();
const meaningController = require("../controllers/MeaningController");

router
  .route("/")
  .get(meaningController.getAllMeanings)
  .delete(meaningController.deleteAllMeanings)
  .post(meaningController.addMeaning);
router
  .route("/:id")
  .get(meaningController.getMeaningById)
  .delete(meaningController.deleteMeaningById)
  .patch(meaningController.updateMeaningById);

module.exports = router;
