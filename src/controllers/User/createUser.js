const { User } = require("../../db");
const { Op } = require("sequelize");

const createUser = async (userData) => {
  const { name, userName, email, email_verified, password } = userData;
  const [newUser,created] = await User.findOrCreate({
    where: {
      [Op.or]: [{ userName }, { email }],
    },
    defaults: {
      name,
      userName,
      email,
      email_verified,
      password,
    },
  });
    if (!created) {
        throw new Error("Este usuario ya está registrado");
    }
    return newUser;

};

module.exports = { createUser };
