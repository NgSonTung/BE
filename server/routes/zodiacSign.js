const express = require("express");
const router = express.Router();
const zodiacSignController = require("../controllers/ZodiacSignController");

router
  .route("/")
  .get(zodiacSignController.getAllZodiacSigns)
  .delete(zodiacSignController.deleteAllZodiacSigns)
  .post(zodiacSignController.addZodiacSign);
router
  .route("/:id")
  .get(zodiacSignController.getZodiacSignById)
  .delete(zodiacSignController.deleteZodiacSignById)
  .patch(zodiacSignController.updateZodiacSignById);

module.exports = router;
