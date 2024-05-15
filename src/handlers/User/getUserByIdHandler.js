const { getUserById} = require('../../controllers/User/getUserById');

const getUserByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await getUserById(id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getUserByIdHandler };