const { User } = require('../../db');

const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('El usuario no existe');
        }
        await user.destroy();
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {deleteUser};