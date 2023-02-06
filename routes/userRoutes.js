const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();

// @route GET && POST - /user/
router
  .route("/")
  .get(userControllers.getAllUsers)
  .post(userControllers.createNewUser)
  .delete(userControllers.deleteUsersById)
  .put(userControllers.updateUserById);

router.route("/:id").get(userControllers.getUserById);

module.exports = router;
