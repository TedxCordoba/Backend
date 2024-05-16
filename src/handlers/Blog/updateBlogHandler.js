const { updateBlog } = require('../../controllers/Blog/updateBlog');

const updateBlogHandler = async (req, res) => {
    const { id } = req.params;
    const dataToUpdate = req.body;
    try {
        const blog = await updateBlog(id, dataToUpdate);
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { updateBlogHandler };