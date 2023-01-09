const express = require("express");
const { getUser } = require("../controller/user.controller");

const UserRouter = express.Router();

UserRouter.get("/User", getUser);

module.exports = UserRouter;
