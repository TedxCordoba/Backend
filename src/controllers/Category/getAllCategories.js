const { Category } = require('../../db');

const getAllCategories = async () => {
    const categories = await Category.findAll();
    if(categories.length === 0){
        throw new Error('No hay categorías registradas.');
    }
    return categories;
};

module.exports = { getAllCategories };