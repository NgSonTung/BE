const WordCount = require("../models/WordCountModel");
const mongoose = require("mongoose");

exports.getAllWordCounts = (req, res) => {
  try {
    WordCount.find({})
      .then((wordCounts) => {
        res.status(200).json({
          code: 200,
          msg: "WordCounts retrieved successfully!",
          data: wordCounts,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve wordCounts.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve wordCounts.",
    });
  }
};

exports.getWordCountById = (req, res) => {
  try {
    const wordCountId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(wordCountId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    WordCount.findById(wordCountId)
      .then((wordCount) => {
        if (!wordCount) {
          return res.status(404).json({
            code: 404,
            msg: "WordCount not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "WordCount retrieved successfully!",
          data: wordCount,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve wordCount.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve wordCount.",
    });
  }
};

exports.deleteAllWordCounts = (req, res) => {
  try {
    WordCount.deleteMany({})
      .then((deletedWordCounts) => {
        return res.status(200).json({
          code: 200,
          msg: "All wordCounts deleted successfully!",
          data: deletedWordCounts,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all wordCounts.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all wordCounts.",
    });
  }
};

exports.deleteWordCountById = (req, res) => {
  const wordCountId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(wordCountId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    WordCount.findByIdAndDelete(wordCountId)
      .then((deletedWordCount) => {
        if (!deletedWordCount) {
          return res.status(404).json({
            code: 404,
            msg: "WordCount not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "WordCount deleted successfully!",
          data: deletedWordCount,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete wordCount.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete wordCount.",
    });
  }
};

exports.updateWordCountById = (req, res) => {
  const wordCountId = req.params.id;
  const newWordCount = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(wordCountId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    WordCount.findById(wordCountId)
      .then((wordCount) => {
        if (!wordCount) {
          return res.status(404).json({
            code: 404,
            msg: "WordCount not found",
          });
        }
        Object.keys(newWordCount).forEach((property) => {
          wordCount[property] = newWordCount[property];
        });
        wordCount
          .save()
          .then((updatedWordCount) =>
            res.status(200).json({
              code: 200,
              msg: "WordCount updated successfully!",
              data: updatedWordCount,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update wordCount.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update wordCount.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update wordCount.",
    });
  }
};

exports.addWordCount = async (req, res) => {
  const wordCountData = req.body;
  try {
    WordCount.create(wordCountData)
      .then((wordCount) => {
        res.status(201).json({
          code: 201,
          msg: "WordCount added successfully!",
          data: wordCount,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add wordCount.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add wordCount.",
    });
  }
};
