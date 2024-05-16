const { Blog, Category } = require("../../db");

const getBlogById = async (id) => {
    
    const blogSearched = await Blog.findByPk(id, {
        include: {
            model: Category, // Especifica el modelo asociado
            as: 'Categories', // Especifica el alias de la asociación
            attributes: ['id', 'name'], // Especifica los atributos que deseas seleccionar
            through: { attributes: [] } // Especifica que no deseas incluir los atributos de la tabla de unión
        }
    });

    if (!blogSearched) {
        throw new Error("El blog solicitado no existe.");
    }

    return blogSearched;

}

module.exports = { getBlogById };