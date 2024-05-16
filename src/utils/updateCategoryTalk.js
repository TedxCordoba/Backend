const { Category } = require('../db');

const updateCategoryTalk = async (dataToUpdate,talk) => {
    const updatedCategories = await Category.findAll({
        where: { id: dataToUpdate.CategoryIds }
    });
    if(updatedCategories.length !== dataToUpdate.CategoryIds.length) throw new Error("Una o más categorías no existen");
    // Actualizar las categorías asociadas al blog utilizando setCategories
    await talk.setCategories(updatedCategories);
    
    // Quitamos categoryIds del objeto dataToUpdate para evitar errores al intentar actualizar otras propiedades del blog
    delete dataToUpdate.categoryIds;
}

module.exports = { updateCategoryTalk };