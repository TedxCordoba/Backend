const { Blog, Category } = require("../../db");
const { validateImg } = require("../../utils/validateImg");
const { validateOrador } = require("../../utils/validateOrador");
const { updateCategoryBlog } = require("../../utils/updateCategoryBlog");

const updateBlog = async (id, dataToUpdate) => {
    const blog = await Blog.findByPk(id, {
        include: [{
            model: Category,
            as: 'Categories' // Nombre de la relación en el modelo Blog
        }]
    });

    if (!blog) throw new Error("El blog que intentas actualizar no existe");

    // Actualizar imágenes y validar orador según lo que ya estás haciendo
    dataToUpdate.images && dataToUpdate.images.forEach((image) => validateImg(image));
    dataToUpdate.UserId && await validateOrador(dataToUpdate.UserId);
    dataToUpdate.CategoryIds && await updateCategoryBlog(dataToUpdate,blog);
    
    // Actualizar el blog con los datos actualizados
    await blog.update(dataToUpdate);

    return `El blog fue actualizado exitosamente`;

};

module.exports = { updateBlog };