const {Category} = require('../../db');

const deleteCategory = async (id) => {
    const category = await Category.findByPk(id);
    if(!category){
        throw new Error('La categoría no existe.');
    }
    await category.destroy();

    return;
}

module.exports = {deleteCategory};