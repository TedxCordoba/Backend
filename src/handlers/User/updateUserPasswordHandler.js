const {
  updateUserPassword,
} = require("../../controllers/User/updateUserPassword");

const updateUserPasswordHandler = async (req, res) => {
  const { id } = req.params;
  const { oldPassword, newPassword } = req.body;

  try {
    await updateUserPassword(id, oldPassword, newPassword);
    res.status(200).json({ message: "Contraseña actualizada con éxito" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { updateUserPasswordHandler };
