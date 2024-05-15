const { updateCategory } = require('../../controllers/Category/updateCategory');

const updateCategoryHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const categoryData = req.body;
        await updateCategory(id, categoryData);
        res.status(200).json({ message: "Categoría actualizada correctamente" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { updateCategoryHandler };