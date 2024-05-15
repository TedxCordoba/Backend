const { deleteCategory } = require("../../controllers/Category/deleteCategory");

const deleteCategoryHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteCategory(id);
        res.status(204).json({ message: "Categoría eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { deleteCategoryHandler };