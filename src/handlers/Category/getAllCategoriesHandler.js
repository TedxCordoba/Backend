const { getAllCategories } = require('../../controllers/Category/getAllCategories');

const getAllCategoriesHandler = async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllCategoriesHandler };