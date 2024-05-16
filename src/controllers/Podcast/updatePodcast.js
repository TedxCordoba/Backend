const { Podcast, Category } = require("../../db");
const { validateImg } = require("../../utils/validateImg");
const { validateOrador } = require("../../utils/validateOrador");
const { validatePodcast } = require("../../utils/validatePodcast");
const { updateCategoryPodcast } = require("../../utils/updateCategoryPodcast");

const updatePodcast = async (id, dataToUpdate) => {
    const podcast = await Podcast.findByPk(id, {
        include: [{
            model: Category,
            as: 'Categories' // Nombre de la relación en el modelo Blog
        }]
    });

    if (!podcast) throw new Error("El podcast que intentas actualizar no existe");

    // Actualizar imágenes y validar orador según lo que ya estás haciendo
    dataToUpdate.images && dataToUpdate.images.forEach((image) => validateImg(image));
    dataToUpdate.UserId && await validateOrador(dataToUpdate.UserId);
    dataToUpdate.podcast && validatePodcast(dataToUpdate.podcast);
    dataToUpdate.CategoryIds && await updateCategoryPodcast(dataToUpdate,podcast);
    
    // Actualizar el blog con los datos actualizados
    await podcast.update(dataToUpdate);

    return `El podcast fue actualizado exitosamente`;

};

module.exports = { updatePodcast };