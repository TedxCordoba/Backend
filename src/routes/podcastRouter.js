const { Router } = require("express");
const { createPodcastHandler } = require("../handlers/Podcast/createPodcastHandler");
const { updatePodcastHandler } = require("../handlers/Podcast/updatePodcastHandler");
const { getPodcastByIdHandler } = require("../handlers/Podcast/getPodcastByIdHandler");
const { getAllPodcastsHandler } = require("../handlers/Podcast/getAllPodcastsHandler");
const { deletePodcastHandler } = require("../handlers/Podcast/deletePodcastHandler");

const podcastRouter = Router();

//GET
podcastRouter.get("/", getAllPodcastsHandler);
podcastRouter.get("/:id", getPodcastByIdHandler);

//POST
podcastRouter.post("/", createPodcastHandler)


//PUT
podcastRouter.put("/:id", updatePodcastHandler)


//DELETE
podcastRouter.delete("/:id", deletePodcastHandler)


module.exports = podcastRouter;