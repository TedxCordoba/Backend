const { Podcast, Category } = require("../../db");

const getPodcastById = async (id) => {
    const podcastSearched = await Podcast.findByPk(id, {
        include: {
            model: Category, // Especifica el modelo asociado
            as: 'Categories', // Especifica el alias de la asociación
            attributes: ['id', 'name'], // Especifica los atributos que deseas seleccionar
            through: { attributes: [] } // Especifica que no deseas incluir los atributos de la tabla de unión
        }
    });

    if (!podcastSearched) {
        throw new Error("El podcast solicitado no existe.");
    }

    return podcastSearched;

};

module.exports = { getPodcastById };