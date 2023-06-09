const express = require("express");
const router = express.Router();
const zodiacAnimalController = require("../controllers/ZodiacAnimalController");

router
  .route("/")
  .get(zodiacAnimalController.getAllZodiacAnimals)
  .delete(zodiacAnimalController.deleteAllZodiacAnimals)
  .post(zodiacAnimalController.addZodiacAnimal);
router
  .route("/:id")
  .get(zodiacAnimalController.getZodiacAnimalById)
  .delete(zodiacAnimalController.deleteZodiacAnimalById)
  .patch(zodiacAnimalController.updateZodiacAnimalById);

module.exports = router;
