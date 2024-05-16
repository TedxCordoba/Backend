const { getAllBlogs } = require('../../controllers/Blog/getAllBlogs');

const getAllBlogsHandler = async (req, res) => {
    try {
        const blogs = await getAllBlogs();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getAllBlogsHandler };