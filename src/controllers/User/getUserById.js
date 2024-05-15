const { User } = require('../../db');

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { getUserById };
