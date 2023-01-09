const express = require("express");
const { getList } = require("../controller/list.controller");
const { getList } = require("../controller/user.controller");

const ListRouter = express.Router();

ListRouter.get("/User", getList);

ListRouter.get("/List", getList);
ListRouter.get("/user/:id/List", getListByUser);
ListRouter.get("/tag/:id/List", getListByTag);
ListRouter.get("/List/:id", getListById);
ListRouter.List("/List/create", createList);
ListRouter.put("/List/:id", updateList);
ListRouter.delete("/List/:id", deleteList);

module.exports = ListRouter;
