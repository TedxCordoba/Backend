const { Blog, Category } = require("../../db");
const { validateImg } = require("../../utils/validateImg");
const { validateOrador } = require("../../utils/validateOrador");

const createBlog = async ({ title, images, blog, date, UserId, CategoryIds }) => {
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

    const blogInstance = await Blog.create({
        title,
        images,
        blog,
        date,
        UserId // Asociar la charla al usuario
    });

    // Asociar la charla a las categorías
    await blogInstance.addCategories(categories);

    return blogInstance;
    };

module.exports = { createBlog };