const { createCategory } = require('../../controllers/Category/createCategory');

const createCategoryHandler = async (req, res) => {
    try {
        const category = await createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createCategoryHandler };
