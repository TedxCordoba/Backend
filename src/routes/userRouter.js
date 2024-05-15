const { Router } = require("express");
const { createUserHandler } = require("../handlers/User/createUserHandler");
const { updateUserHandler } = require("../handlers/User/updateUserHandler");
const { deleteUserHandler } = require('../handlers/User/deleteUserHandler');
const { getUsersHandler } = require('../handlers/User/getUsersHandler');
const { getUserByIdHandler } = require('../handlers/User/getUserByIdHandler');
const { updateUserPasswordHandler } = require('../handlers/User/updateUserPasswordHandler');

const userRouter = Router();

//GET

userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getUserByIdHandler);

//POST

userRouter.post("/", createUserHandler);

//PUT

userRouter.put("/:id", updateUserPasswordHandler);
userRouter.put("/:id", updateUserHandler);

//DELETE

userRouter.delete("/:id", deleteUserHandler);


module.exports = userRouter;