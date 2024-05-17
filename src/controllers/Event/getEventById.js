const { Event, User } = require('../../db');

const getEventById = async (id) => {

    const eventSearched = await Event.findByPk(id, {
        include: {
            model: User, // Especifica el modelo asociado
            as: 'Users', // Especifica el alias de la asociación
            attributes: ['id', 'name','image'], // Especifica los atributos que deseas seleccionar
            through: { attributes: [] } // Especifica que no deseas incluir los atributos de la tabla de unión
        }
    });

    if (!eventSearched) {
        throw new Error("El blog solicitado no existe.");
    }

    return eventSearched;
};

module.exports = { getEventById };