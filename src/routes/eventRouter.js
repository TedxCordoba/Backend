const { Router } = require("express");
const { createEventHandler } = require("../handlers/Event/createEventHandler");
const { updateEventHandler } = require("../handlers/Event/updateEventHandler");
const { getAllEventsHandler } = require("../handlers/Event/getAllEventsHandler");
const { getEventByIdHandler } = require("../handlers/Event/getEventByIdHandler");

const eventRouter = Router();

//GET
eventRouter.get("/", getAllEventsHandler)
eventRouter.get("/:id", getEventByIdHandler)

//POST
eventRouter.post("/", createEventHandler)


//PUT
eventRouter.put("/:id", updateEventHandler)


//DELETE


module.exports = eventRouter;