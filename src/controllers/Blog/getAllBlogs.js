const { Blog, Category } = require("../../db");

const getAllBlogs = async () => {
    const blogs = await Blog.findAll({
        include: {
            model: Category,
            as: 'Categories',
            attributes: ['id', 'name'],
            through: { attributes: [] }
        }
    });

    return blogs;
} ;

module.exports = { getAllBlogs };