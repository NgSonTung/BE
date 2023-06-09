const User = require("../models/UserModel");
const mongoose = require("mongoose");

exports.getAllUsers = (req, res) => {
  try {
    User.find({})
      .then((users) => {
        res.status(200).json({
          code: 200,
          msg: "Users retrieved successfully!",
          data: users,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve users.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve users.",
    });
  }
};

exports.getUserById = (req, res) => {
  try {
    const userId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    User.findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            code: 404,
            msg: "User not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "User retrieved successfully!",
          data: user,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to retrieve user.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to retrieve user.",
    });
  }
};

exports.deleteAllUsers = (req, res) => {
  try {
    User.deleteMany({})
      .then((deletedUsers) => {
        return res.status(200).json({
          code: 200,
          msg: "All users deleted successfully!",
          data: deletedUsers,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed delete to all users.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed delete to all users.",
    });
  }
};

exports.deleteUserById = (req, res) => {
  const userId = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    User.findByIdAndDelete(userId)
      .then((deletedUser) => {
        if (!deletedUser) {
          return res.status(404).json({
            code: 404,
            msg: "User not found",
          });
        }
        return res.status(200).json({
          code: 200,
          msg: "User deleted successfully!",
          data: deletedUser,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to delete user.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to delete user.",
    });
  }
};

exports.updateUserById = (req, res) => {
  const userId = req.params.id;
  const newUser = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        code: 400,
        msg: "Invalid id",
      });
    }
    User.findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            code: 404,
            msg: "User not found",
          });
        }
        Object.keys(newUser).forEach((property) => {
          user[property] = newUser[property];
        });
        user
          .save()
          .then((updatedUser) =>
            res.status(200).json({
              code: 200,
              msg: "User updated successfully!",
              data: updatedUser,
            })
          )
          .catch((e) =>
            res.status(500).json({
              code: 500,
              msg: "Failed to update user.",
              error: e.message,
            })
          );
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to update user.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to update user.",
    });
  }
};

exports.addUser = async (req, res) => {
  const userData = req.body;
  try {
    User.create(userData)
      .then((user) => {
        res.status(201).json({
          code: 201,
          msg: "User added successfully!",
          data: user,
        });
      })
      .catch((e) => {
        res.status(500).json({
          code: 500,
          msg: "Failed to add user.",
          error: e.message,
        });
      });
  } catch (e) {
    res.status(500).json({
      code: 500,
      msg: "Failed to add user.",
    });
  }
};
