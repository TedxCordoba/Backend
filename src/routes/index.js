const { Router } = require("express");
// route's
const userRouter = require("./userRouter");

const router = Router();


// entry points
router.use("/user", userRouter);

module.exports = router;