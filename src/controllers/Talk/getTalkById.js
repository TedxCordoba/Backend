const { Talk, Category} = require('../../db');

const getTalkById = async (id) => {

    const talkSearched = await Talk.findByPk(id, {
        include: {
            model: Category, // Especifica el modelo asociado
            as: 'Categories', // Especifica el alias de la asociación
            attributes: ['id', 'name'], // Especifica los atributos que deseas seleccionar
            through: { attributes: [] } // Especifica que no deseas incluir los atributos de la tabla de unión
        }
    });

    if (!talkSearched) {
        throw new Error("La charla solicitada no existe.");
    }

    return talkSearched;

}

module.exports = { getTalkById };