const express = require("express");
const router = express.Router();
const genderController = require("../controllers/GenderController");

router
  .route("/")
  .get(genderController.getAllGenders)
  .delete(genderController.deleteAllGenders)
  .post(genderController.addGender);
router
  .route("/:id")
  .get(genderController.getGenderById)
  .delete(genderController.deleteGenderById)
  .patch(genderController.updateGenderById);

module.exports = router;
