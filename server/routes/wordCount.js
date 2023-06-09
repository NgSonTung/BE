const express = require("express");
const router = express.Router();
const wordCountController = require("../controllers/WordCountController");

router
  .route("/")
  .get(wordCountController.getAllWordCounts)
  .delete(wordCountController.deleteAllWordCounts)
  .post(wordCountController.addWordCount);
router
  .route("/:id")
  .get(wordCountController.getWordCountById)
  .delete(wordCountController.deleteWordCountById)
  .patch(wordCountController.updateWordCountById);

module.exports = router;
