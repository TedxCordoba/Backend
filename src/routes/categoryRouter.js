const { Router } = require("express");
const { createCategoryHandler } = require("../handlers/Category/createCategoryHandler");
const { getAllCategoriesHandler } = require("../handlers/Category/getAllCategoriesHandler");
const { deleteCategoryHandler } = require("../handlers/Category/deleteCategoryHandler");
const { updateCategoryHandler } = require("../handlers/Category/updateCategoryHandler");

const categoryRouter = Router();

//GET

categoryRouter.get("/", getAllCategoriesHandler);

//POST

categoryRouter.post("/", createCategoryHandler);


//PUT

categoryRouter.put("/:id", updateCategoryHandler);


//DELETE

categoryRouter.delete("/:id", deleteCategoryHandler)



module.exports = categoryRouter;