const express = require("express");
const router = express.Router();
const ethnicityController = require("../controllers/EthnicityController");

router
  .route("/")
  .get(ethnicityController.getAllEthnicities)
  .delete(ethnicityController.deleteAllEthnicities)
  .post(ethnicityController.addEthnicity);
router
  .route("/:id")
  .get(ethnicityController.getEthnicityById)
  .delete(ethnicityController.deleteEthnicityById)
  .patch(ethnicityController.updateEthnicityById);

module.exports = router;
