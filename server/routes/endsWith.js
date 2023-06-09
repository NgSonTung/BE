const express = require("express");
const router = express.Router();
const endsWithController = require("../controllers/EndsWithController");

router
  .route("/")
  .get(endsWithController.getAllEndsWiths)
  .delete(endsWithController.deleteAllEndsWiths)
  .post(endsWithController.addEndsWith);
router
  .route("/:id")
  .get(endsWithController.getEndsWithById)
  .delete(endsWithController.deleteEndsWithById)
  .patch(endsWithController.updateEndsWithById);

module.exports = router;
