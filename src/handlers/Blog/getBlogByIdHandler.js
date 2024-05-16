const { getBlogById } = require('../../controllers/Blog/getBlogById');

const getBlogByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await getBlogById(id);
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getBlogByIdHandler };
