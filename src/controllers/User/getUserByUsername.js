const { User } = require('../../db');
const {Op} = require('sequelize');

const getUserByUserName = async (username) => {
    try {
        const user = await User.findAll({
            where: {
                userName: {
                    [Op.iLike]: `%${username}%`
                }
            }
        });
        return user;
    }
    catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { getUserByUserName };