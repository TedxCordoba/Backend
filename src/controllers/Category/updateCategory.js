const {Category} = require('../../db');

const updateCategory = async (id, categoryData) => {
    const category = await Category.findByPk(id);
    if(!category){
        throw new Error('La categoría no existe.');
    }
    await category.update(categoryData);

    return;
}

module.exports = {updateCategory};