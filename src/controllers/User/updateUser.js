const {User} = require('../../db');

const updateUser = async (id, userData) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('El usuario no existe');
        }
        await user.update(userData);
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {updateUser};