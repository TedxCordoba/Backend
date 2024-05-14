const { createUser } = require("../../controllers/User/createUser");

const createUserHandler = async (req, res) => {
  try {
    const userData = req.body;
    const user = await createUser(userData);
    res.status(201).json({message: "Usuario creado con éxito", user});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { createUserHandler };