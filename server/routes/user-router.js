const express = require("express");

const UserCtrl = require("../controllers/user-ctrl");

const router = express.Router();

router.post("/user", UserCtrl.createUser);
router.get("/user/:id", UserCtrl.getUserById);
router.get("/users",UserCtrl.getUsers);

module.exports = router;
