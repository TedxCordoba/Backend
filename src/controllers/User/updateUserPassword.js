const { User } = require('../../db');
const { validatePassword } = require('../../utils/validatePassword');

const updateUserPassword = async (id, oldPassword, newPassword) => {
    const user = await User.findByPk(id);

    if (!user) {
        throw new Error('Usuario no encontrado');
    }

    const isOldPasswordValid = await user.password === oldPassword;

    if (!isOldPasswordValid) {
        throw new Error('Contraseña incorrecta');
    }

    if(validatePassword(newPassword)){
        user.password = newPassword;
        await user.save();
    }
    return;
};

module.exports = { updateUserPassword };