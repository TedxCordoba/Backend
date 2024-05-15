const { User } = require("../../db");
const { Op } = require("sequelize");
const { validatePassword } = require("../../utils/validatePassword");
const { validateEmail } = require("../../utils/validateEmail");

const createUser = async (userData) => {
  const { name, userName, email, email_verified, password } = userData;

  validateEmail(email);
  validatePassword(password);

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
    if (newUser.userName === userName) {
      throw new Error("Ya existe un usuario con ese nombre de usuario.");
    }
    if (newUser.email === email) {
      throw new Error("Ya existe un usuario registrado con ese correo electrónico.");
    }
  }
    return newUser;
};

module.exports = { createUser };
