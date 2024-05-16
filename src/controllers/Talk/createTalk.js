const { Talk, Category } = require("../../db");
const { validateVideo } = require("../../utils/validateVideo");
const { validateImg } = require("../../utils/validateImg");
const { validateOrador } = require("../../utils/validateOrador");

const createTalk = async (talk) => {
    const { title, video, images, description, date, UserId, CategoryIds } = talk;

    validateVideo(video);

    if (images) {
        images.forEach((image) => validateImg(image));
    }

   await validateOrador(UserId);

    // Verificar si los CategoryIds son válidos
    const categories = await Category.findAll({
        where: { id: CategoryIds }
    });
    if (categories.length !== CategoryIds.length) {
        throw new Error("Al menos una de las categorías asociadas no existe.");
    }

    const talkInstance = await Talk.create({
        title,
        video,
        images,
        description,
        date,
        UserId // Asociar la charla al usuario
    });

    // Asociar la charla a las categorías
    await talkInstance.addCategories(categories);

    return talkInstance;
}

module.exports = { createTalk };