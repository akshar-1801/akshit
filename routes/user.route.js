const express = require("express");
const { getUsers, addUser, loginUser } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getUsers);

router.post("/signup", addUser);

router.post("/login", loginUser);

module.exports = router;
