const express = require("express");
const router = express.Router();
const startsWithController = require("../controllers/StartsWithController");

router
  .route("/")
  .get(startsWithController.getAllStartsWiths)
  .delete(startsWithController.deleteAllStartsWiths)
  .post(startsWithController.addStartsWith);
router
  .route("/:id")
  .get(startsWithController.getStartsWithById)
  .delete(startsWithController.deleteStartsWithById)
  .patch(startsWithController.updateStartsWithById);

module.exports = router;
