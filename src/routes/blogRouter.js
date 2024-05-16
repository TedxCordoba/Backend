const { Router } = require("express");
const { createBlogHandler } = require("../handlers/Blog/createBlogHandler");
const { updateBlogHandler } = require("../handlers/Blog/updateBlogHandler");
const { getBlogByIdHandler } = require("../handlers/Blog/getBlogByIdHandler");
const { deleteBlogHandler } = require("../handlers/Blog/deleteBlogHandler");
const { getAllBlogsHandler } = require("../handlers/Blog/getAllBlogsHandler");

const blogRouter = Router();

//GET
blogRouter.get("/", getAllBlogsHandler);
blogRouter.get("/:id", getBlogByIdHandler);

//POST
blogRouter.post("/", createBlogHandler)


//PUT
blogRouter.put("/:id", updateBlogHandler)


//DELETE
blogRouter.delete("/:id", deleteBlogHandler)


module.exports = blogRouter;