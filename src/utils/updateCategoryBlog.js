const { Category } = require('../db');

const updateCategoryBlog = async (dataToUpdate,blog) => {
    const updatedCategories = await Category.findAll({
        where: { id: dataToUpdate.CategoryIds }
    });
    if(updatedCategories.length !== dataToUpdate.CategoryIds.length) throw new Error("Una o más categorías no existen");
    // Actualizar las categorías asociadas al blog utilizando setCategories
    await blog.setCategories(updatedCategories);
    
    // Quitamos categoryIds del objeto dataToUpdate para evitar errores al intentar actualizar otras propiedades del blog
    delete dataToUpdate.categoryIds;
}

module.exports = { updateCategoryBlog };