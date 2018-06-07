const express = require("express");
const router = express.Router();

// const SampleController = require('./../controllers/sample.controllers');
const UserController = require('./../controllers/users.controllers');
const checkAuth = require('../middleware/check-auth');

// router.get("/",UserController.sampleUser);
router.get("/",checkAuth,UserController.sampleUser);

// router.post("/login", UserController.user_login);

// router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;
