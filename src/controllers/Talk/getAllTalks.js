const { Talk,Category } = require('../../db');

const getAllTalks = async () => {
    const allTalks = await Talk.findAll({
        include: {
            model: Category, // Especifica el modelo asociado
            as: 'Categories', // Especifica el alias de la asociación
            attributes: ['id', 'name'], // Especifica los atributos que deseas seleccionar
            through: { attributes: [] } // Especifica que no deseas incluir los atributos de la tabla de unión
        }
    });

    if (!allTalks) {
        throw new Error("No hay charlas disponibles.");
    }

    return allTalks;
};

module.exports = { getAllTalks };