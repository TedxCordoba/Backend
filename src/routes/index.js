const { Router } = require("express");
// route's
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
const eventRouter = require("./eventRouter");
const talkRouter = require("./talkRouter");
const blogRouter = require("./blogRouter");
//const podcastRouter = require("./podcastRouter");

const router = Router();


// entry points
router.use("/user", userRouter);
router.use("/category", categoryRouter)
router.use("/event", eventRouter);
router.use("/talk", talkRouter);
router.use("/blog", blogRouter);
//router.use("/podcast", podcastRouter);

module.exports = router;