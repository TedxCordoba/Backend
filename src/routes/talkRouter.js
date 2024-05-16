const { Router } = require("express");
const { createTalkHandler } = require("../handlers/Talk/createTalkHandler");
const { updateTalkHandler } = require("../handlers/Talk/updateTalkHandler");
const { getTalkByIdHandler } = require("../handlers/Talk/getTalkByIdHandler");
const { deleteTalkHandler } = require("../handlers/Talk/deleteTalkHandler");
const { getAllTalksHandler } = require("../handlers/Talk/getAllTalksHandler");

const talkRouter = Router();

//GET
talkRouter.get("/", getAllTalksHandler);
talkRouter.get("/:id", getTalkByIdHandler);

//POST
talkRouter.post("/", createTalkHandler)


//PUT
talkRouter.put("/:id", updateTalkHandler)


//DELETE
talkRouter.delete("/:id", deleteTalkHandler)


module.exports = talkRouter;