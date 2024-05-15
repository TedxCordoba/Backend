const { Category } = require('../../db');
const { Op } = require('sequelize');

const createCategory = async (category) => {
    const [newCategory,created] = await Category.findOrCreate({
        where: {
            name: {
                [Op.iLike]: `%${category.name}%`
            }
        },
        defaults: category
    });
    if(!created){
        throw new Error(`La categoría ${category.name} ya existe.`);
    }
    return newCategory;
}

module.exports = { createCategory };