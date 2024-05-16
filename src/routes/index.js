const { Router } = require("express");
// route's
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
const eventRouter = require("./eventRouter");
const talkRouter = require("./talkRouter");

const router = Router();


// entry points
router.use("/user", userRouter);
router.use("/category", categoryRouter)
router.use("/event", eventRouter);
router.use("/talk", talkRouter);

module.exports = router;