const { Blog } = require('../../db');

const deleteBlog = async (id) => {

    const blog = await Blog.findByPk(id);
    if (!blog) throw new Error("El blog que intentas eliminar no existe");

    await blog.destroy();

    return blog;
};

module.exports = { deleteBlog };