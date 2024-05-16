const { User } = require("../../db");
const { Op } = require("sequelize");

const updateUser = async (username, userData) => {
  try {
    const user = await User.findOne({
        where: {userName: {[Op.iLike]: `%${username}%`}},
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      throw new Error("El usuario no existe");
    }
    await user.update(userData);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { updateUser };
