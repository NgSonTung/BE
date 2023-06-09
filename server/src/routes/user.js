const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router
  .route("/")
  .get(userController.getAllUsers)
  .delete(userController.deleteAllUsers)
  .post(userController.addUser);
router
  .route("/:id")
  .get(userController.getUserById)
  .delete(userController.deleteUserById)
  .patch(userController.updateUserById);

module.exports = router;
