const { createBlog } = require('../../controllers/Blog/createBlog');

const createBlogHandler = async (req, res) => {
    const { title, images, blog, date, UserId, CategoryIds } = req.body;
    try {
        const blogToCreate = await createBlog({ title, images, blog, date, UserId, CategoryIds});
        res.status(201).json(blogToCreate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createBlogHandler };