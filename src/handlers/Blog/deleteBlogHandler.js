const { deleteBlog } = require('../../controllers/Blog/deleteBlog');

const deleteBlogHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await deleteBlog(id);
        res.status(200).json({ message: "Blog eliminado con éxito", blog });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { deleteBlogHandler };