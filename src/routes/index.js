const { Router } = require("express");
// route's
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");

const router = Router();


// entry points
router.use("/user", userRouter);
router.use("/category", categoryRouter)

module.exports = router;